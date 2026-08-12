"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ProductCard } from "./product-card";
import { products } from "@/data/products";

const filters = ["All", "Hoodies", "New", "Available", "Sold Out"];
const sorts = ["Featured", "Newest", "Price Low to High", "Price High to Low"];

export function ShopClient() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter") === "new" ? "New" : "All");
  const [sort, setSort] = useState("Featured");
  const [filterOpen, setFilterOpen] = useState(false);

  const results = useMemo(() => {
    let next = products.filter((product) => {
      if (filter === "New") return product.isNew;
      if (filter === "Available") return product.available;
      if (filter === "Sold Out") return !product.available;
      return true;
    });
    next = [...next].sort((a, b) => {
      if (sort === "Newest") return Number(b.isNew) - Number(a.isNew) || a.order - b.order;
      if (sort === "Price Low to High") return a.price - b.price;
      if (sort === "Price High to Low") return b.price - a.price;
      return a.order - b.order;
    });
    return next;
  }, [filter, sort]);

  const controls = (
    <>
      <div className="filter-group"><span>FILTER</span>{filters.map((option) => <button key={option} className={filter === option ? "is-active" : ""} type="button" onClick={() => setFilter(option)}>{option}<small>{option === "All" || option === "Hoodies" ? products.length : option === "New" ? products.filter((p) => p.isNew).length : option === "Available" ? products.filter((p) => p.available).length : products.filter((p) => !p.available).length}</small></button>)}</div>
      <div className="filter-group"><span>SORT</span>{sorts.map((option) => <button key={option} className={sort === option ? "is-active" : ""} type="button" onClick={() => setSort(option)}>{option}</button>)}</div>
    </>
  );

  return (
    <div className="shop-page">
      <header className="page-hero shop-hero"><span>DROP 01 / CANADA</span><h1>SHOP<br /><em>ALL</em></h1><p>HEAVYWEIGHT HOODIES<br />FOR THE EVERYDAY.</p></header>
      <div className="shop-toolbar"><span>{results.length} PRODUCTS</span><button type="button" onClick={() => setFilterOpen(true)}><SlidersHorizontal /> FILTER / SORT</button><span>SORT: {sort.toUpperCase()}</span></div>
      <div className="shop-layout"><aside className="shop-sidebar">{controls}</aside><div className="product-grid shop-grid">{results.map((product, index) => <ProductCard key={product.slug} product={product} priority={index < 2} />)}</div></div>
      <AnimatePresence>
        {filterOpen && <><motion.button className="drawer-backdrop" aria-label="Close filters" onClick={() => setFilterOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} /><motion.aside className="filter-drawer" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}><div className="drawer-head"><span>FILTER / SORT</span><button type="button" onClick={() => setFilterOpen(false)}><X /></button></div>{controls}<button type="button" className="button button--dark" onClick={() => setFilterOpen(false)}>VIEW {results.length} PRODUCTS</button></motion.aside></>}
      </AnimatePresence>
    </div>
  );
}
