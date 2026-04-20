
import products from "@/data/products.json";
import CheckoutClient from "./product-client";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <main className="section">
        <div className="container">
          <div className="card"><h1>Produk tidak ditemukan</h1></div>
        </div>
      </main>
    );
  }

  return <CheckoutClient product={product} />;
}
