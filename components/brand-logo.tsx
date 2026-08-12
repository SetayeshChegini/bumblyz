import Link from "next/link";
import { assetPath } from "@/lib/site";

export function BrandLogo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const logoUrl = `${assetPath("/brand-logo.webp")}?v=b388e5e`;

  return (
    <Link
      href="/"
      className={`brand-logo ${light ? "brand-logo--light" : ""} ${className}`}
      aria-label="BUMBLYZ home"
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "currentColor",
          WebkitMaskImage: `url("${logoUrl}")`,
          maskImage: `url("${logoUrl}")`,
          WebkitMaskPosition: "center",
          maskPosition: "center",
          maskMode: "alpha",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    </Link>
  );
}
