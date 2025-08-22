import { NextResponse } from "next/server";

// Mock products (same as in /api/products/route.js)
let products = [
  { id: "1", name: "Laptop Pro", description: "Powerful laptop for modern professionals.", price: 1200 },
  { id: "2", name: "Smartphone X", description: "Next-generation smartphone with sleek design.", price: 800 },
  { id: "3", name: "Wireless Earbuds", description: "Crystal-clear sound with noise cancellation.", price: 200 },
];

// GET → return single product by id
export async function GET(req, { params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
