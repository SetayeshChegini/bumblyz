import type { Metadata } from "next";
import { StoreShell } from "@/components/store-shell";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bumblyz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BUMBLYZ — Drop 01",
    template: "%s — BUMBLYZ",
  },
  description:
    "Premium heavyweight streetwear hoodies. BUMBLYZ Drop 01, made to stand out.",
  openGraph: {
    title: "BUMBLYZ — Drop 01",
    description: "Made to stand out. Explore the first BUMBLYZ hoodie drop.",
    images: [{ url: "/og.webp", width: 960, height: 540, alt: "BUMBLYZ Drop 01" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUMBLYZ — Drop 01",
    description: "Made to stand out. Explore the first BUMBLYZ hoodie drop.",
    images: ["/og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StoreShell>{children}</StoreShell>
      </body>
    </html>
  );
}
