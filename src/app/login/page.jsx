"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCredentialsLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError("Invalid credentials");
      setLoading(false);
    } else {
      router.push("/products");
    }
  }

  async function handleGoogleLogin() {
    setLoading(true);
    await signIn("google", { callbackUrl: "/products" });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {error && (
          <div className="mb-4 text-center text-black bg-red-500 p-2 rounded">
            {error}
          </div>
        )}

        {/* Credentials Login */}
        <form onSubmit={handleCredentialsLogin} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border p-3 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-6 flex items-center justify-center gap-2">
          <span className="text-gray-400">or</span>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? "Redirecting..." : "Login with Google"}
        </button>
      </div>
    </div>
  );
}
