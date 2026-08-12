import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="page-hero about-hero"><span>BUMBLYZ / THE IDEA</span><h1>THIS IS<br /><em>BUMBLYZ.</em></h1><p>NOT JUST ANOTHER HOODIE.</p></header>
      <section className="about-intro">
        <div className="about-logo-art"><Image src="/brand-logo.webp" alt="BUMBLYZ Shop bee logo" fill sizes="(max-width: 760px) 92vw, 58vw" /></div>
        <div><span>01 / WHO WE ARE</span><p>BUMBLYZ started with a simple idea: the piece you wear most should say the most about you. We make heavyweight streetwear with strong silhouettes, quiet details and enough attitude to become your everyday uniform.</p></div>
      </section>
      <section className="about-photo"><Image src="/images/campaign-02.webp" alt="BUMBLYZ streetwear campaign photographed in the city" fill sizes="100vw" /><span>DROP 01 / BEHIND THE FORM</span></section>
      <section className="about-values">
        <article><span>01</span><h2>WEIGHT</h2><p>Dense, considered fabrics designed to feel substantial and wear beautifully.</p></article>
        <article><span>02</span><h2>SHAPE</h2><p>Relaxed proportions that look intentional from every angle.</p></article>
        <article><span>03</span><h2>IDENTITY</h2><p>A point of view you can feel without a loud explanation.</p></article>
      </section>
      <section className="info-bands">
        <article id="shipping"><span>SHIPPING</span><h2>CANADA FIRST.<br />WORLD NEXT.</h2><p>Orders ship from Canada. Complimentary domestic shipping is available on orders over $150 CAD. Tracking is sent when your order leaves us.</p></article>
        <article id="returns"><span>RETURNS</span><h2>TRY IT.<br />MAKE IT YOURS.</h2><p>Unworn items with original tags may be returned within 14 days of delivery. Final-sale items will always be clearly marked before purchase.</p></article>
        <article id="contact"><span>CONTACT</span><h2>LET&apos;S TALK.</h2><p>Questions about fit, your order or the next drop?</p><a href="mailto:hello@bumblyz.com">HELLO@BUMBLYZ.COM →</a></article>
      </section>
      <section className="about-cta"><p>READY TO FIND YOURS?</p><Link href="/shop">SHOP THE DROP →</Link></section>
    </div>
  );
}
