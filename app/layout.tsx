import type { Metadata } from "next";
import { StoreShell } from "@/components/store-shell";
import { assetPath, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BUMBLYZ — Drop 01",
    template: "%s — BUMBLYZ",
  },
  description:
    "Premium heavyweight streetwear hoodies. BUMBLYZ Drop 01, made to stand out.",
  openGraph: {
    title: "BUMBLYZ — Drop 01",
    description: "Made to stand out. Explore the first BUMBLYZ hoodie drop.",
    images: [{ url: assetPath("/og.webp"), width: 960, height: 540, alt: "BUMBLYZ Drop 01" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUMBLYZ — Drop 01",
    description: "Made to stand out. Explore the first BUMBLYZ hoodie drop.",
    images: [assetPath("/og.webp")],
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
