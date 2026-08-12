"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { formatPrice } from "@/data/products";
import { useStore } from "@/components/store-provider";

export default function CheckoutPage() {
  const { items, subtotal } = useStore();
  return (
    <div className="checkout-page">
      <div className="checkout-head"><Link href="/shop"><ArrowLeft /> CONTINUE SHOPPING</Link><span>SECURE CHECKOUT <LockKeyhole /></span></div>
      <div className="checkout-layout">
        <section className="checkout-main"><span>CHECKOUT / PREVIEW</span><h1>ALMOST<br />YOURS.</h1><div className="checkout-note"><strong>PAYMENTS AREN&apos;T LIVE YET.</strong><p>This checkout is ready for a payment provider such as Stripe. No payment or order will be created on this preview.</p></div><Link href="/shop" className="button button--dark">KEEP SHOPPING <span>→</span></Link></section>
        <aside className="order-summary"><h2>ORDER SUMMARY / {items.reduce((sum, item) => sum + item.quantity, 0)}</h2>{items.length ? <>{items.map((item) => <article key={item.key}><div><Image src={item.image} alt="" fill sizes="90px" /><span>{item.quantity}</span></div><p>{item.name}<small>{item.color} / {item.size}</small></p><b>{formatPrice(item.price * item.quantity)}</b></article>)}<div className="summary-total"><span>SUBTOTAL</span><b>{formatPrice(subtotal)}</b></div><div className="summary-total"><span>SHIPPING</span><b>CALCULATED LATER</b></div><div className="summary-total summary-total--grand"><span>TOTAL</span><b>{formatPrice(subtotal)}</b></div></> : <div className="checkout-empty"><p>YOUR BAG IS EMPTY.</p><Link href="/shop">SHOP DROP 01 →</Link></div>}</aside>
      </div>
    </div>
  );
}
