import { db } from "@/lib/firebase/client";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  doc,
  updateDoc,
  writeBatch,
  Timestamp,
} from "firebase/firestore";
import { toPlainObject } from "@/lib/utils/serialization";
import type { Service } from "@/lib/types";

export async function getServicesAction(): Promise<Service[]> {
  const q = query(collection(db, "services"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  const services = snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Service,
  );
  return toPlainObject(services);
}

export async function getServiceBySlugAction(
  slug: string,
): Promise<Service | null> {
  const q = query(
    collection(db, "services"),
    where("slug", "==", slug),
    limit(1),
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return toPlainObject({ id: docSnap.id, ...docSnap.data() } as Service);
}

export async function updateServiceAction(
  id: string,
  data: Partial<Service>,
): Promise<void> {
  const docRef = doc(db, "services", id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

export async function seedServicesAction(
  services: Omit<Service, "updatedAt">[],
): Promise<void> {
  const batch = writeBatch(db);
  for (const service of services) {
    const ref = doc(db, "services", service.id);
    batch.set(ref, { ...service, updatedAt: Timestamp.now() });
  }
  await batch.commit();
}
