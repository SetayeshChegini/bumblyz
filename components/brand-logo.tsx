import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={`brand-logo ${light ? "brand-logo--light" : ""} ${className}`}
      aria-label="BUMBLYZ home"
    >
      <Image
        src="/brand-logo.webp"
        alt="BUMBLYZ Shop bee logo"
        fill
        sizes="(max-width: 760px) 112px, 152px"
        priority
      />
    </Link>
  );
}
