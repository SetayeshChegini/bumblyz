import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image-link" aria-label={`View ${product.name}`}>
        <div className="product-card-badges">
          {product.isNew && <span>NEW</span>}
          {!product.available && <span>SOLD OUT</span>}
        </div>
        <Image className="product-image product-image--front" src={product.images[0]} alt={`${product.name} front view`} fill priority={priority} sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" />
        <Image className="product-image product-image--back" src={product.images[1]} alt={`${product.name} back view`} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" />
        <span className="product-view-link">VIEW PRODUCT →</span>
      </Link>
      <div className="product-card-meta">
        <div><Link href={`/products/${product.slug}`}>{product.shortName}</Link><span>{formatPrice(product.price)}</span></div>
        <div className="color-dots" aria-label={`${product.colors.length} colors`}>
          {product.colors.map((color) => <span key={color.name} style={{ background: color.hex }} title={color.name} />)}
          <small>{product.colors.length} COLOURS</small>
        </div>
      </div>
    </article>
  );
}
