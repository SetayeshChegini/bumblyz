import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { Newsletter } from "./newsletter";

const shop = [
  ["Shop all", "/shop"], ["New drop", "/shop?filter=new"], ["Hoodies", "/shop"], ["Lookbook", "/lookbook"],
];
const info = [
  ["About", "/about"], ["Size guide", "/products/essential-hoodie"], ["Shipping", "/about#shipping"], ["Returns", "/about#returns"], ["Contact", "/about#contact"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <BrandLogo light />
        <p>EVERYDAY STREETWEAR.<br />LOUD WITHOUT SHOUTING.</p>
      </div>
      <div className="footer-grid">
        <div><h3>SHOP</h3>{shop.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</div>
        <div><h3>INFO</h3>{info.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</div>
        <div><h3>SOCIAL</h3><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok <ArrowUpRight /></a></div>
        <div className="footer-newsletter"><h3>STAY IN THE LOOP</h3><p>New drops, restocks and nothing else.</p><Newsletter compact /></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} BUMBLYZ</span><span>CANADA / CAD</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}
