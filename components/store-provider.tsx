"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  key: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
};

type StoreContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  cartOpen: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setMenuOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  addItem: (product: Product, color: string, size: string) => void;
  changeQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const CART_KEY = "bumblyz-cart-v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let restored: CartItem[] = [];
    try {
      const saved = window.localStorage.getItem(CART_KEY);
      if (saved) restored = JSON.parse(saved) as CartItem[];
    } catch {
      window.localStorage.removeItem(CART_KEY);
    }
    const restoreCart = window.setTimeout(() => {
      setItems(restored);
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(restoreCart);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    const locked = cartOpen || menuOpen || searchOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen, menuOpen, searchOpen]);

  const value = useMemo<StoreContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
    cartOpen,
    menuOpen,
    searchOpen,
    setCartOpen,
    setMenuOpen,
    setSearchOpen,
    addItem(product, color, size) {
      const key = `${product.slug}-${color}-${size}`;
      setItems((current) => {
        const match = current.find((item) => item.key === key);
        if (match) {
          return current.map((item) =>
            item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }
        return [...current, {
          key,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.images[0],
          color,
          size,
          quantity: 1,
        }];
      });
      setCartOpen(true);
    },
    changeQuantity(key, quantity) {
      if (quantity < 1) return;
      setItems((current) => current.map((item) => item.key === key ? { ...item, quantity } : item));
    },
    removeItem(key) {
      setItems((current) => current.filter((item) => item.key !== key));
    },
  }), [items, cartOpen, menuOpen, searchOpen]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
