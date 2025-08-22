"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md text-black">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        ProductApp
      </Link>

      {/* Links */}
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-600 transition">
          Products
        </Link>
        <Link href="/login" className="hover:text-blue-600 transition">
          Login
        </Link>
      </div>
    </nav>
  );
}
