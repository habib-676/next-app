"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Redirect if not logged in
  if (!session) {
    if (typeof window !== "undefined") router.push("/login");
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const body = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setMessage("Product added successfully!");
        e.target.reset();
      } else {
        const error = await res.json();
        setMessage(error.error || "Failed to add product");
      }
    } catch (err) {
      setMessage("Error adding product");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-lg mx-auto my-20 p-8 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>

      {message && (
        <div className="mb-4 text-center text-white bg-green-500 p-2 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Product Name"
          className="border p-3 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          className="border p-3 rounded"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
