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
import type { Lead, LeadAttachment } from "@/lib/types";

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
  onProgress?: (fileName: string, percent: number) => void,
): Promise<{ id: string; failedFiles: string[] }> {
  // The ID is created first so uploaded files can be stored under their lead.
  const leadRef = doc(collection(db, "leads"));

  const uploads = await Promise.allSettled(
    files.map((file, index) =>
      uploadLeadFile(leadRef.id, file, index, (percent) =>
        onProgress?.(file.name, percent),
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
    attachments,
    failedAttachments: failedFiles,
    status: "new",
    createdAt: Timestamp.now(),
  });

  forwardLeadToCrm({
    id: leadRef.id,
    ...data,
    attachmentNames: attachments.map((file) => file.name),
    failedAttachments: failedFiles,
    submittedAt: new Date().toISOString(),
  });

  return { id: leadRef.id, failedFiles };
}

export async function updateLeadStatus(
  id: string,
  status: Lead["status"],
): Promise<void> {
  const docRef = doc(db, "leads", id);
  await updateDoc(docRef, { status });
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
