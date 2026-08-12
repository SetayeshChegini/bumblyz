import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/site";

const frames = [
  { src: assetPath("/images/campaign-03.webp"), alt: "Black hoodie worn in the city", number: "01", caption: "CITY LINE", className: "frame-1" },
  { src: assetPath("/images/campaign-02.webp"), alt: "Black hoodie photographed from the back", number: "02", caption: "BACK STORY", className: "frame-2" },
  { src: assetPath("/images/look-01.webp"), alt: "Streetwear fabric and pocket detail", number: "03", caption: "CLOSE / FORM", className: "frame-3" },
  { src: assetPath("/images/campaign-01.webp"), alt: "Oversized black hoodie outdoors", number: "04", caption: "DROP 01", className: "frame-4" },
  { src: assetPath("/images/hero.webp"), alt: "Minimal off-white fleece styled flat", number: "05", caption: "ESSENTIAL", className: "frame-5" },
  { src: assetPath("/images/look-04.webp"), alt: "Curated clothing rail", number: "06", caption: "THE UNIFORM", className: "frame-6" },
];

export default function LookbookPage() {
  return (
    <div className="lookbook-page">
      <header className="lookbook-hero">
        <span>CAMPAIGN / 001</span>
        <h1>NO<br /><em>UNIFORM</em><br />REQUIRED.</h1>
        <p>BUMBLYZ DROP 01<br />TORONTO, CANADA<br />2026</p>
      </header>
      <div className="lookbook-page-grid">
        {frames.map((frame) => (
          <figure className={frame.className} key={frame.src}>
            <div><Image src={frame.src} alt={frame.alt} fill sizes="(max-width: 760px) 100vw, 70vw" /></div>
            <figcaption><span>{frame.number}</span>{frame.caption}</figcaption>
          </figure>
        ))}
      </div>
      <section className="lookbook-end">
        <span>SEEN SOMETHING?</span><h2>WEAR IT<br />YOUR WAY.</h2><Link href="/shop">SHOP DROP 01 <ArrowUpRight /></Link>
      </section>
    </div>
  );
}
