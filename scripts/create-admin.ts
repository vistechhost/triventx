/**
 * Create Admin script — creates a new admin user in Firebase Auth.
 * Run: npx ts-node --project tsconfig.scripts.json scripts/create-admin.ts
 */

import * as admin from "firebase-admin";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// Helper to clean env values (remove potential quotes)
const cleanEnv = (val: string | undefined) => {
  if (!val) return undefined;
  return val.replace(/^["']|["']$/g, "").trim();
};

const projectId = cleanEnv(process.env.FIREBASE_ADMIN_PROJECT_ID);
const clientEmail = cleanEnv(process.env.FIREBASE_ADMIN_CLIENT_EMAIL);
const rawPrivateKey = cleanEnv(process.env.FIREBASE_ADMIN_PRIVATE_KEY);

const privateKey = rawPrivateKey
  ? rawPrivateKey.replace(/\\n/g, "\n")
  : undefined;

if (admin.apps.length === 0) {
  if (!projectId || !clientEmail || !privateKey) {
    console.error(
      "❌ Missing required Admin SDK environment variables in .env.local",
    );
    console.log({ projectId, clientEmail, hasPrivateKey: !!privateKey });
    process.exit(1);
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

const auth = admin.auth();

async function createAdminUser() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error(
      "Error: ADMIN_EMAIL or ADMIN_PASSWORD not found in .env.local",
    );
    process.exit(1);
  }

  try {
    // Check if user already exists
    try {
      await auth.getUserByEmail(email);
      console.log(`User ${email} already exists. Updating password...`);
      const user = await auth.getUserByEmail(email);
      await auth.updateUser(user.uid, { password });
      console.log("✓ Password updated successfully");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        console.log(`Creating user ${email}...`);
        await auth.createUser({
          email,
          password,
          emailVerified: true,
          displayName: "Admin",
        });
        console.log("✓ Admin user created successfully");
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.error("Error creating admin user:", error);
    process.exit(1);
  }
}

async function main() {
  console.log("\n🔐 Creating TriventX Admin User...\n");
  await createAdminUser();
  console.log("\n✅ Process complete!\n");
  process.exit(0);
}

main();
