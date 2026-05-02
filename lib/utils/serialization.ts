/**
 * Utility to convert Firestore Timestamps and other non-plain objects
 * into plain JSON-serializable objects for Next.js Server Actions.
 */
export function toPlainObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
