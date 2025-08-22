# ProductApp - Next.js 15 Assignment App

A simple **product management application** built with **Next.js 15 (App Router)** and **NextAuth.js**.  
Users can browse products publicly and, after login, add new products via a protected dashboard.

---

## ✅ Features

### Public Pages
- **Landing Page (`/`)**  
  - Navbar, Hero, Product Highlights, Footer  
  - Links to Login and Products pages

- **Product List (`/products`)**  
  - Shows all products from API  
  - Each product displays name, description, price, and a details button

- **Product Details (`/products/[id]`)**  
  - Full details of a single product

### Protected Pages
- **Add Product (`/dashboard/add-product`)**  
  - Accessible only after login  
  - Form to add a new product (name, description, price)  
  - Stores data in in-memory API (can be extended to database)

### Authentication
- **NextAuth.js**  
  - Google login  
  - Credentials login (mock user: `test@test.com / 123456`)  
  - Redirects to `/products` after login  
- Protected routes redirect unauthenticated users to `/login`

### Optional Enhancements
- Loading spinner on form submission  
- Toast messages on success/error  
- Tailwind CSS styling  
- Google Fonts (Geist)

---

## 🛠 Technologies Used
- [Next.js 15](https://nextjs.org/) (App Router)  
- [NextAuth.js](https://next-auth.js.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- React hooks (`useState`, `useEffect`)  
- JavaScript (JSX)  
- In-memory API using Route Handlers (`app/api/*/route.js`)  

---

## 📁 Project Structure

app/
 ├─ api/
 │   ├─ auth/[...nextauth]/route.js    → NextAuth configuration (login, session)
 │   ├─ products/route.js              → GET all products, POST add product
 │   └─ products/[id]/route.js         → GET single product details
 ├─ dashboard/
 │   └─ add-product/page.jsx           → Protected add-product form
 ├─ products/
 │   ├─ page.jsx                        → Public product list
 │   └─ [id]/page.jsx                   → Product details
 ├─ login/page.jsx                      → Login page
 └─ page.jsx                            → Landing page

components/
 ├─ Navbar.jsx                          → Navigation bar
 ├─ Footer.jsx                          → Footer section
 └─ AuthProvider.jsx                     → Auth context / session wrapper

public/
 └─ ...                                → Static assets (images, icons, etc.)

styles/
 └─ globals.css                         → Tailwind CSS & global styles

.env.local                              → Environment variables for NextAuth

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
