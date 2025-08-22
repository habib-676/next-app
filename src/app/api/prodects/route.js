let products = [
  { id: "1", name: "Laptop Pro", description: "Powerful laptop for modern professionals.", price: 1200 },
  { id: "2", name: "Smartphone X", description: "Next-generation smartphone with sleek design.", price: 800 },
  { id: "3", name: "Wireless Earbuds", description: "Crystal-clear sound with noise cancellation.", price: 200 },
];

export async function GET() {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = { id: Date.now().toString(), ...body };
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
