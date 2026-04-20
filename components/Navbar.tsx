
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">XinnStore</Link>
        <nav className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/check" className="nav-link">Cek Transaksi</Link>
        </nav>
      </div>
    </header>
  );
}
