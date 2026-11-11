import { db } from "@/lib/firebase/client";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  setDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { uploadLeadFile } from "@/lib/firebase/storage";
import { toPlainObject } from "@/lib/utils/serialization";
import { leadReference } from "@/lib/utils/lead-session";
import type { Lead, LeadAttachment, LeadAttribution } from "@/lib/types";

interface CreateLeadData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  projectVolume: string;
  projectLocation: string;
  message: string;
  source: string;
  attribution?: LeadAttribution;
}

// Sends each new lead to the CRM webhook, if one is configured (see .env.local.example).
// The lead is already saved by this point, so a CRM outage must not affect the visitor.
function forwardLeadToCrm(payload: Record<string, unknown>): void {
  const webhookUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL;
  if (!webhookUrl) return;

  fetch(webhookUrl, {
    method: "POST",
    // text/plain avoids a CORS preflight, which webhook endpoints generally don't answer.
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify(payload),
    mode: "no-cors",
    // Lets the request finish while the browser moves on to the thank-you page.
    keepalive: true,
  }).catch((error) => console.error("CRM forwarding failed:", error));
}

export async function submitLead(
  data: CreateLeadData,
  files: File[] = [],
  /** Called with the file's position in `files`, so files with the same name don't share progress. */
  onProgress?: (fileIndex: number, percent: number) => void,
): Promise<{ id: string; reference: string; failedFiles: string[] }> {
  // The ID is created first so uploaded files can be stored under their lead.
  const leadRef = doc(collection(db, "leads"));
  const reference = leadReference(leadRef.id);

  const uploads = await Promise.allSettled(
    files.map((file, index) =>
      uploadLeadFile(leadRef.id, file, index, (percent) =>
        onProgress?.(index, percent),
      ),
    ),
  );

  // A failed attachment must never cost us the lead, so it is saved regardless.
  const attachments: LeadAttachment[] = [];
  const failedFiles: string[] = [];
  uploads.forEach((result, index) => {
    if (result.status === "fulfilled") {
      attachments.push(result.value);
    } else {
      console.error(`Upload failed for ${files[index].name}:`, result.reason);
      failedFiles.push(files[index].name);
    }
  });

  await setDoc(leadRef, {
    ...data,
    reference,
    attachments,
    failedAttachments: failedFiles,
    status: "new",
    createdAt: Timestamp.now(),
  });

  forwardLeadToCrm({
    id: leadRef.id,
    reference,
    ...data,
    attachmentNames: attachments.map((file) => file.name),
    failedAttachments: failedFiles,
    submittedAt: new Date().toISOString(),
  });

  return { id: leadRef.id, reference, failedFiles };
}

export async function updateLeadStatus(
  id: string,
  status: Lead["status"],
): Promise<void> {
  const docRef = doc(db, "leads", id);
  await updateDoc(docRef, { status });
}

/** Saves the admin's follow-up notes and next follow-up date (YYYY-MM-DD, or empty to clear). */
export async function updateLeadFollowUp(
  id: string,
  followUp: { notes: string; nextFollowUp: string },
): Promise<void> {
  await updateDoc(doc(db, "leads", id), followUp);
}

/** Records that the client was contacted and schedules the next follow-up. */
export async function markLeadContacted(
  id: string,
  nextFollowUp: string,
): Promise<Timestamp> {
  const lastContactedAt = Timestamp.now();
  await updateDoc(doc(db, "leads", id), {
    status: "contacted",
    lastContactedAt,
    nextFollowUp,
  });
  return lastContactedAt;
}

export async function getLeadsAction(): Promise<Lead[]> {
  const q = query(
    collection(db, "leads"),
    orderBy("createdAt", "desc"),
    limit(100),
  );
  const snapshot = await getDocs(q);

  const leads = snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Lead,
  );

  return toPlainObject(leads);
}

export async function getRecentLeadsAction(limitCount = 5): Promise<Lead[]> {
  const q = query(
    collection(db, "leads"),
    orderBy("createdAt", "desc"),
    limit(limitCount),
  );
  const snapshot = await getDocs(q);

  const leads = snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Lead,
  );

  return toPlainObject(leads);
}
