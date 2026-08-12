import { Suspense } from "react";
import { ShopClient } from "@/components/shop-client";

export default function ShopPage() {
  return <Suspense><ShopClient /></Suspense>;
}
