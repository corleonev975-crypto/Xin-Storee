import Link from "next/link";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <h1 className="hero-title">Top Up Game Favoritmu Lebih Cepat di XinnStore</h1>
            <p className="hero-subtitle">
              Top up game dan voucher digital dengan proses cepat, aman, dan anti ribet.
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/products" className="button">
                Top Up Sekarang
              </Link>
              <Link href="/check" className="button secondary">
                Cek Transaksi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Produk Populer</h2>
          <div className="grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
