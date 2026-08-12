"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { Newsletter } from "@/components/newsletter";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/site";

function BrandTracker() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.12, 0.5], ["3vw", "82vw"]);
  return (
    <motion.div className="brand-tracker" style={{ x: reduceMotion ? 0 : x }} aria-hidden="true">
      <Image src={assetPath("/brand-mark.webp")} alt="" fill sizes="38px" /><i />
    </motion.div>
  );
}

const lookbook = [
  { src: assetPath("/images/campaign-03.webp"), label: "01 / CITY LINE", href: "/products/essential-hoodie", className: "look-a" },
  { src: assetPath("/images/campaign-02.webp"), label: "02 / AFTER DARK", href: "/products/heavyweight-hoodie", className: "look-b" },
  { src: assetPath("/images/look-01.webp"), label: "03 / DETAIL", href: "/lookbook", className: "look-c" },
  { src: assetPath("/images/campaign-01.webp"), label: "04 / DROP 01", href: "/products/bee-logo-hoodie", className: "look-d" },
];

export default function HomePage() {
  return (
    <div id="top" className="home-page">
      <section className="hero">
        <Image src={assetPath("/images/campaign-02.webp")} alt="BUMBLYZ Drop 01 streetwear campaign" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-kicker"><span>TORONTO / CA</span><span>DROP 01 — 2026</span></div>
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.09 } } }}>
          <motion.span variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>DROP 01</motion.span>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0 } }}>BUMBLYZ</motion.h1>
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            <p>HEAVYWEIGHT FORM.<br />EVERYDAY ATTITUDE.</p>
            <Link href="/shop" className="button button--light">SHOP THE DROP <ArrowUpRight /></Link>
          </motion.div>
        </motion.div>
        <a className="hero-scroll" href="#drop" aria-label="Scroll to first drop"><ArrowDown /></a>
      </section>

      <BrandTracker />

      <section id="drop" className="section products-section">
        <Reveal className="section-head"><div><span>01</span><p>THE FIRST DROP</p></div><h2>NEW<br />UNIFORM</h2><Link href="/shop">SHOP ALL →</Link></Reveal>
        <div className="product-grid">
          {products.map((product, index) => <ProductCard key={product.slug} product={product} priority={index < 2} />)}
        </div>
      </section>

      <section className="brand-statement">
        <div className="statement-top"><span>BUMBLYZ / EST. 2026</span><span>BUILT FOR THE EVERYDAY</span></div>
        <Reveal><h2>MADE TO<br /><em>STAND OUT.</em></h2></Reveal>
        <Reveal className="statement-copy" delay={0.1}><span>↳</span><p>BUMBLYZ creates everyday streetwear with attitude, comfort and identity. No noise. Just weight, shape and a point of view.</p></Reveal>
      </section>

      <section className="section lookbook-preview">
        <Reveal className="section-head section-head--wide"><div><span>02</span><p>EDITORIAL / 01</p></div><h2>LOOK<br />BOOK</h2><Link href="/lookbook">VIEW LOOKBOOK →</Link></Reveal>
        <div className="lookbook-grid">
          {lookbook.map((look) => (
            <Link href={look.href} className={`lookbook-tile ${look.className}`} key={look.src}>
              <Image src={look.src} alt={look.label} fill sizes="(max-width: 700px) 100vw, 50vw" />
              <span>{look.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="collections-section">
        <div className="collections-intro"><span>03 / SHOP BY DROP</span><p>Three chapters.<br />One point of view.</p></div>
        <div className="collection-cards">
          <Link href="/shop?filter=new" className="collection-card">
            <Image src={assetPath("/images/campaign-03.webp")} alt="Drop 01 collection" fill sizes="(max-width: 700px) 100vw, 34vw" />
            <span>01</span><h3>DROP 01</h3><ArrowUpRight />
          </Link>
          <Link href="/shop" className="collection-card">
            <Image src={assetPath("/images/hero.webp")} alt="BUMBLYZ essentials collection" fill sizes="(max-width: 700px) 100vw, 34vw" />
            <span>02</span><h3>ESSENTIALS</h3><ArrowUpRight />
          </Link>
          <div className="collection-card collection-card--soon">
            <Image src={assetPath("/images/look-04.webp")} alt="Future BUMBLYZ collection" fill sizes="(max-width: 700px) 100vw, 34vw" />
            <span>03</span><h3>COMING SOON</h3><small>NOTIFY ME</small>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div><span>04 / STAY CLOSE</span><h2>JOIN<br /><em>THE HIVE</em></h2></div>
        <div><p>Be the first to know about new drops and restocks.</p><Newsletter /></div>
      </section>
    </div>
  );
}
