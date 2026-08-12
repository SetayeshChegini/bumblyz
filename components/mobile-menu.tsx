"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { useStore } from "./store-provider";

const links = [
  ["01", "Shop", "/shop"],
  ["02", "New drop", "/shop?filter=new"],
  ["03", "Lookbook", "/lookbook"],
  ["04", "About", "/about"],
];

export function MobileMenu() {
  const { menuOpen, setMenuOpen } = useStore();

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overlay-topbar">
            <BrandLogo light />
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <nav aria-label="Mobile navigation">
            {links.map(([number, label, href], index) => (
              <motion.div key={href} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 + index * 0.06 }}>
                <Link href={href} onClick={() => setMenuOpen(false)}>
                  <span>{number}</span>{label}<ArrowUpRight aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="mobile-menu-foot">
            <span>DROP 01 / TORONTO</span>
            <span>CAD</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
