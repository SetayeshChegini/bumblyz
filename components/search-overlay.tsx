"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { formatPrice, products } from "@/data/products";
import { useStore } from "./store-provider";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = query.trim()
    ? products.filter((product) => product.name.toLowerCase().includes(query.trim().toLowerCase()))
    : products.slice(0, 3);

  useEffect(() => {
    if (searchOpen) window.setTimeout(() => inputRef.current?.focus(), 250);
    else window.setTimeout(() => setQuery(""), 0);
  }, [searchOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setSearchOpen]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div className="search-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="overlay-topbar">
            <span>SEARCH / BUMBLYZ</span>
            <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search"><X /></button>
          </div>
          <motion.div className="search-inner" initial={{ y: 25 }} animate={{ y: 0 }}>
            <label htmlFor="product-search">What are you looking for?</label>
            <div className="search-input-wrap">
              <Search aria-hidden="true" />
              <input
                ref={inputRef}
                id="product-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="SEARCH THE DROP"
                autoComplete="off"
              />
            </div>
            <div className="search-label">{query ? `${results.length} RESULTS` : "SUGGESTED"}</div>
            {results.length ? (
              <div className="search-results">
                {results.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} onClick={() => setSearchOpen(false)}>
                    <div className="search-thumb"><Image src={product.images[0]} alt="" fill sizes="96px" /></div>
                    <span>{product.name}<small>{formatPrice(product.price)}</small></span>
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="search-empty">NO HOODIES FOUND.<br /><Link href="/shop" onClick={() => setSearchOpen(false)}>SHOP ALL</Link></div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
