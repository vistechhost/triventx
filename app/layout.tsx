import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Clean geometric headings that sit well beside the logo's wordmark.
const heading = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://triventxenergy.com",
  ),
  title: {
    default: "TriventX Energy LLP — Solar Engineering Services",
    template: "%s | TriventX Energy LLP",
  },
  description:
    "Accurate, efficient, and code-compliant solar PV design and engineering — sales proposals, site assessments, AHJ-ready permit plan sets, PE review & stamping, interconnection, PTO support, and as-built drawings — plus wind energy and telecom engineering.",
  keywords: [
    "solar permit design",
    "solar engineering stamps",
    "PE stamp solar",
    "solar as-built drawings",
    "solar sales proposals",
    "AHJ compliant solar drawings",
    "solar site survey",
    "solar permit plan sets",
    "solar interconnection services",
    "solar PTO support",
    "wind energy engineering services",
    "telecom engineering services",
  ],
  authors: [{ name: "TriventX Energy LLP" }],
  creator: "TriventX Energy LLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://triventxenergy.com",
    siteName: "TriventX Energy LLP",
    title: "TriventX Energy LLP — Solar Engineering Services",
    description:
      "Engineering smarter. Delivering faster. Helping solar businesses scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TriventX Energy LLP — Solar Engineering Services",
    description:
      "Engineering smarter. Delivering faster. Helping solar businesses scale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${heading.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
