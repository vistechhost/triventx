import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore, type Firestore } from 'firebase/firestore'
import { connectAuthEmulator, getAuth, type Auth } from 'firebase/auth'
import { connectStorageEmulator, getStorage, type FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

let app: FirebaseApp
let db: Firestore
let auth: Auth
let storage: FirebaseStorage

if (typeof window !== 'undefined') {
  const isFirstInit = getApps().length === 0
  app = isFirstInit ? initializeApp(firebaseConfig) : getApps()[0]
  db = getFirestore(app)
  auth = getAuth(app)
  storage = getStorage(app)

  // Local testing against `firebase emulators:start`, so production data is never touched.
  if (isFirstInit && process.env.NEXT_PUBLIC_FIREBASE_EMULATOR === 'true') {
    connectFirestoreEmulator(db, '127.0.0.1', 8080)
    connectStorageEmulator(storage, '127.0.0.1', 9199)
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true })
  }
}

export { app, db, auth, storage }
