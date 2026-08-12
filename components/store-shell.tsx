"use client";

import { StoreProvider } from "./store-provider";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { CartDrawer } from "./cart-drawer";
import { SearchOverlay } from "./search-overlay";
import { MobileMenu } from "./mobile-menu";

export function StoreShell({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <CartDrawer />
      <SearchOverlay />
      <MobileMenu />
    </StoreProvider>
  );
}
