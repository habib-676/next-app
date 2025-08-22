import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Discover & Manage Products Effortlessly
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          A simple product management app built with Next.js 15 and NextAuth.
          Browse, explore, and manage products in one place.
        </p>
        <div className="flex gap-4">
          <Link
            href="/products"
            className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Explore Products
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 bg-indigo-800 rounded-xl font-semibold shadow-md hover:bg-indigo-900 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* ✅ Product Highlights Section */}
      <section className="px-6 py-16 bg-gray-50 text-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Laptop Pro</h3>
            <p className="text-gray-600 mb-4">
              Powerful laptop for modern professionals.
            </p>
            <p className="font-bold text-indigo-600 text-lg">$1200</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Smartphone X</h3>
            <p className="text-gray-600 mb-4">
              Next-generation smartphone with sleek design.
            </p>
            <p className="font-bold text-indigo-600 text-lg">$800</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Wireless Earbuds</h3>
            <p className="text-gray-600 mb-4">
              Crystal-clear sound with noise cancellation.
            </p>
            <p className="font-bold text-indigo-600 text-lg">$200</p>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

