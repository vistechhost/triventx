# TriventX Energy LLP — Corporate Website

Premium solar engineering services website built with Next.js 15, Firebase, and React Three Fiber.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript strict mode
- **Styling:** Tailwind CSS v3.4 with custom design tokens
- **3D Engine:** React Three Fiber + Drei
- **Animations:** Framer Motion
- **Database:** Firebase Firestore
- **Storage:** Firebase Storage
- **Auth:** Firebase Auth (email/password)
- **Forms:** React Hook Form + Zod

---

## Quick Start

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Set Up Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Firebase credentials:

```bash
cp .env.local.example .env.local
```

Required variables:
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
NEXT_PUBLIC_SITE_URL=https://triventxenergy.com
```

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com) → Create/select project
2. Enable **Firestore Database** (start in production mode)
3. Enable **Firebase Storage**
4. Enable **Authentication** → Email/Password provider
5. Create an admin user in Firebase Auth
6. Download a **service account key** → Project Settings → Service Accounts → Generate new private key
7. Paste the JSON values into your `.env.local` as the `FIREBASE_ADMIN_*` variables

#### Apply Firestore Security Rules

```bash
npx firebase-tools deploy --only firestore:rules
```

Or paste the contents of `firestore.rules` directly in the Firebase Console.

#### Deploy Firestore Indexes

```bash
npx firebase-tools deploy --only firestore:indexes
```

### 4. Seed Firestore

Run the seed script to populate the database with services, site settings, and sample leads:

```bash
npm install -D ts-node dotenv
npx ts-node --project tsconfig.scripts.json scripts/seed.ts
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Admin portal: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Project Structure

```
/app
  /(public)          → Public-facing pages (Home, About, Services, Contact)
  /admin             → Admin dashboard (protected)
  /api               → API routes (leads, session management)
  globals.css
  layout.tsx
  sitemap.ts
  robots.ts

/components
  /ui                → Reusable UI primitives (Button, Card, Input, etc.)
  /3d                → React Three Fiber components (HeroScene, house, panels)
  /home              → Homepage section components
  /services          → Service-specific interactive components
  /layout            → Navbar, Footer
  /admin             → Admin-specific components (Sidebar, StatCard)

/lib
  /firebase          → Firebase client, admin, storage, auth helpers
  /actions           → Next.js Server Actions
  /types             → TypeScript type definitions
  /utils             → Utility functions (cn, format)
  /data              → Static fallback data (services, site settings)

/scripts             → Database seed script
```

---

## Admin Portal

The admin portal at `/admin` requires authentication via Firebase Auth.

**Create an admin user** via Firebase Console → Authentication → Add user

### Admin Features

| Page | Path | Description |
|------|------|-------------|
| Dashboard | `/admin` | Stats overview, recent leads, quick actions |
| Services | `/admin/services` | Edit service content (title, description, features, TAT) |
| Images | `/admin/images` | Drag-and-drop upload, delete, copy URLs |
| Leads | `/admin/leads` | View/filter all contact submissions, update status, export CSV |
| Site Settings | `/admin/site-settings` | Edit hero text, contact info, social links, stats |

---

## Deployment (Vercel)

### Manual Deploy

1. Push code to GitHub
2. Connect repository in [Vercel Dashboard](https://vercel.com)
3. Add all environment variables from `.env.local.example`
4. Set **Install Command** to: `npm install --legacy-peer-deps`
5. Deploy

### Important: `FIREBASE_ADMIN_PRIVATE_KEY`

In Vercel, paste the full private key including `-----BEGIN PRIVATE KEY-----` header/footer with actual newlines. The code handles `\\n` → `\n` conversion automatically.

---

## Customization

Search for `// TODO: REPLACE` comments to find placeholder content:
- `components/home/TrustBar.tsx` — Replace gradient tiles with real client logos
- `components/home/TestimonialsCarousel.tsx` — Replace with real testimonials
- `app/(public)/about/page.tsx` — Replace team initials with real photos
- `app/(public)/about/page.tsx` — Replace certification placeholders with official logos

### Brand Colors

Edit `tailwind.config.ts`:
- `primary`: `#FF8A00` (solar orange)
- `secondary`: `#0066FF` (electric blue)
- `accent`: `#00C896` (energy green)

---

## License

Proprietary — TriventX Energy LLP. All rights reserved.
