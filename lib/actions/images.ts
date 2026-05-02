import { db } from "@/lib/firebase/client";
import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { toPlainObject } from "@/lib/utils/serialization";
import type { ImageAsset } from "@/lib/types";

export async function getImageAssetsAction(): Promise<ImageAsset[]> {
  const q = query(collection(db, "images"), orderBy("uploadedAt", "desc"));
  const snapshot = await getDocs(q);
  const images = snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as ImageAsset,
  );
  return toPlainObject(images);
}

export async function saveImageAssetAction(
  data: Omit<ImageAsset, "id">,
): Promise<string> {
  const docRef = await addDoc(collection(db, "images"), data);
  return docRef.id;
}

export async function deleteImageAssetAction(id: string): Promise<void> {
  const docRef = doc(db, "images", id);
  await deleteDoc(docRef);
}
