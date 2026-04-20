
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  denominations: { name: string; price: number }[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="card product-card">
      <h3>{product.name}</h3>
      <p className="muted">Kategori: {product.category}</p>
      <p className="muted">Mulai dari Rp {product.denominations[0]?.price.toLocaleString("id-ID")}</p>
      <span className="badge">Top Up</span>
    </Link>
  );
}
