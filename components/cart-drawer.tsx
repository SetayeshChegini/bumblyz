"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { formatPrice } from "@/data/products";
import { useStore } from "./store-provider";

export function CartDrawer() {
  const { cartOpen, setCartOpen, items, subtotal, changeQuantity, removeItem } = useStore();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.button className="drawer-backdrop" aria-label="Close bag" onClick={() => setCartOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside className="cart-drawer" aria-label="Shopping bag" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}>
            <div className="drawer-head"><span>YOUR BAG / {items.length}</span><button type="button" onClick={() => setCartOpen(false)} aria-label="Close bag"><X /></button></div>
            {items.length ? (
              <>
                <div className="cart-items">
                  {items.map((item) => (
                    <article className="cart-item" key={item.key}>
                      <Link href={`/products/${item.slug}`} onClick={() => setCartOpen(false)} className="cart-item-image">
                        <Image src={item.image} alt={item.name} fill sizes="120px" />
                      </Link>
                      <div className="cart-item-copy">
                        <Link href={`/products/${item.slug}`} onClick={() => setCartOpen(false)}>{item.name}</Link>
                        <span>{item.color} / {item.size}</span>
                        <span>{formatPrice(item.price)}</span>
                        <div className="quantity-row">
                          <button type="button" onClick={() => changeQuantity(item.key, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}><Minus /></button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => changeQuantity(item.key, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}><Plus /></button>
                        </div>
                      </div>
                      <button className="remove-item" type="button" onClick={() => removeItem(item.key)} aria-label={`Remove ${item.name}`}><Trash2 /></button>
                    </article>
                  ))}
                </div>
                <div className="cart-summary">
                  <div><span>SUBTOTAL</span><span>{formatPrice(subtotal)}</span></div>
                  <p>Taxes and shipping calculated at checkout.</p>
                  <Link href="/checkout" onClick={() => setCartOpen(false)} className="button button--dark">CHECKOUT <span>→</span></Link>
                </div>
              </>
            ) : (
              <div className="cart-empty">
                <span>00</span>
                <h2>YOUR BAG<br />IS EMPTY</h2>
                <p>Drop 01 is waiting.</p>
                <Link href="/shop" onClick={() => setCartOpen(false)} className="text-link">SHOP THE DROP →</Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
