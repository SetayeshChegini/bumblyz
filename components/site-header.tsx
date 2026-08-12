"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { useStore } from "./store-provider";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?filter=new", label: "New drop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setCartOpen, setMenuOpen, setSearchOpen } = useStore();
  const overlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${overlay ? "site-header--overlay" : "site-header--solid"}`}>
      <BrandLogo light={overlay} />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? "is-active" : ""}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search products">
          <Search aria-hidden="true" />
        </button>
        <Link className="account-link" href="/about#contact" aria-label="Account and contact">
          <UserRound aria-hidden="true" />
        </Link>
        <button className="bag-button" type="button" onClick={() => setCartOpen(true)} aria-label={`Open bag with ${itemCount} items`}>
          <ShoppingBag aria-hidden="true" />
          <span>{itemCount}</span>
        </button>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
