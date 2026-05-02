import { db } from "@/lib/firebase/client";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { toPlainObject } from "@/lib/utils/serialization";
import type { Lead } from "@/lib/types";

interface CreateLeadData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceInterest: string;
  projectSize?: string;
  message: string;
}

export async function submitLead(
  data: CreateLeadData,
): Promise<{ id: string }> {
  const leadData = {
    ...data,
    status: "new",
    createdAt: Timestamp.now(),
  };

  const docRef = await addDoc(collection(db, "leads"), leadData);
  return { id: docRef.id };
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
