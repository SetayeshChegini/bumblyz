"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { useStore } from "./store-provider";
import { SizeGuide } from "./size-guide";

export function ProductDetail({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState("");
  const [error, setError] = useState("");
  const [guideOpen, setGuideOpen] = useState(false);
  const { addItem } = useStore();

  const add = () => {
    if (!size) {
      setError("SELECT A SIZE BEFORE ADDING TO BAG");
      return;
    }
    setError("");
    addItem(product, color, size);
  };

  const accordions = [
    ["DESCRIPTION", product.description],
    ["DETAILS", product.details],
    ["MATERIAL", product.material],
    ["FIT", product.fit],
    ["SHIPPING & RETURNS", "Complimentary Canadian shipping over $150. Returns accepted within 14 days on unworn items."],
  ];

  return (
    <div className="product-page">
      <div className="product-breadcrumb"><Link href="/shop"><ArrowLeft /> SHOP ALL</Link><span>DROP 01 / {product.shortName.toUpperCase()}</span></div>
      <div className="product-layout">
        <div className="product-gallery">
          {product.images.map((image, index) => (
            <div className={`product-gallery-image product-gallery-image--${index + 1}`} key={`${image}-${index}`}>
              <Image src={image} alt={`${product.name} ${["front", "back", "close-up", "detail"][index]} view`} fill priority={index === 0} sizes="(max-width: 800px) 100vw, 58vw" />
              <span>{String(index + 1).padStart(2, "0")} / 04</span>
            </div>
          ))}
        </div>
        <aside className="product-info">
          <div className="product-title-row"><span>{product.isNew ? "NEW / DROP 01" : "DROP 01"}</span>{!product.available && <span>SOLD OUT</span>}</div>
          <h1>{product.name}</h1>
          <div className="product-price">{formatPrice(product.price)}</div>
          <p className="product-lead">{product.description}</p>
          <fieldset className="selector-group">
            <legend>COLOUR <span>{color.toUpperCase()}</span></legend>
            <div className="color-options">
              {product.colors.map((option) => (
                <button key={option.name} type="button" className={color === option.name ? "is-selected" : ""} onClick={() => setColor(option.name)} aria-pressed={color === option.name}>
                  <i style={{ background: option.hex }} />{option.name}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="selector-group">
            <legend>SIZE <button type="button" onClick={() => setGuideOpen(true)}>SIZE GUIDE ↗</button></legend>
            <div className="size-options">
              {product.sizes.map((option) => <button key={option} type="button" className={size === option ? "is-selected" : ""} onClick={() => { setSize(option); setError(""); }} aria-pressed={size === option}>{option}</button>)}
            </div>
          </fieldset>
          {error && <p className="product-error" role="alert">↳ {error}</p>}
          <button className="button button--dark add-button" type="button" onClick={add} disabled={!product.available}>{product.available ? "ADD TO BAG" : "SOLD OUT"}<span>→</span></button>
          <div className="product-accordions">
            {accordions.map(([title, copy], index) => (
              <details key={title} open={index === 0}><summary>{title}<ChevronDown /></summary><p>{copy}</p></details>
            ))}
          </div>
        </aside>
      </div>
      <SizeGuide open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}
