import { db } from "@/lib/firebase/client";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toPlainObject } from "@/lib/utils/serialization";
import type { SiteSettings } from "@/lib/types";
import { SITE_SETTINGS_DEFAULT } from "@/lib/data/services";

export async function getSiteSettingsAction(): Promise<SiteSettings> {
  const docRef = doc(db, "siteSettings", "main");
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return SITE_SETTINGS_DEFAULT as SiteSettings;
  return toPlainObject(docSnap.data() as SiteSettings);
}

export async function updateSiteSettingsAction(
  data: Partial<SiteSettings>,
): Promise<void> {
  const docRef = doc(db, "siteSettings", "main");
  await setDoc(docRef, data, { merge: true });
}
