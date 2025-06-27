# 🛒 Full Stack Project – Checkout System & Favorite NPM Packages App

This repository contains two projects:

1. **Backend**: A Node.js + TypeScript API to manage products, cart, and apply discount rules.
2. **Frontend**: A React + Tailwind CSS app to search for NPM packages and manage a favorite list.

---


---

## 🚀 Live Demo

Frontend deployed on Netlify:  
🔗 **[Visit Live App](https://heroic-halva-232e79.netlify.app/list)**

GitHub Repo:  
🔗 **[View Source Code](https://github.com/chanchal-soni98/betaelectric.git)**

---

## 🧩 Tech Stack

**Frontend:**
- React
- TypeScript
- Tailwind CSS
- React Router
- LocalStorage API

**Backend:**
- Node.js
- Express.js
- TypeScript
- MongoDB (with Mongoose)

---

## 📦 Favorite NPM Packages App (Frontend)

### ✅ Features

- 🔍 **Search NPM packages** using the [npms.io API](https://api.npms.io/v2/search?q=).
- ➕ **Add packages to favorites** with a reason.
- 📜 **List all favorites** with view/delete support.
- 🧾 **Delete with confirmation** using a modal.
- ✅ Uses `localStorage` for persistent storage.
- ⚛️ Fully responsive and styled with Tailwind.

### 📂 Pages

- `/add` – Search & Add NPM Packages
- `/list` – List all favorite packages
- `/no-favs` – Message when no favorites are added

---

## 🛠️ Checkout API System (Backend)

### 🎯 Features

- 📦 **Product Listing**: Create & fetch products.
- 🛒 **Add to Cart**: Scan items into a single persistent cart.
- 💸 **Dynamic Discounts**:
  - Buy 3 x A → Rs 85 total
  - Buy 2 x B → Rs 35 total
  - Basket total > Rs 150 → extra Rs 20 off
- 🧾 **Cart API** returns:
  - All items
  - Individual discounts
  - Total price
  - Total discount

### 🔐 API Endpoints

#### Products
```http
GET    /api/products          → List all products
POST   /api/products          → Add new product (name, price)

POST   /api/cart/add          → Add item to cart (productId, quantity)
GET    /api/cart              → Get cart items, total, and discounts

[
  { "name": "A", "price": 30 },
  { "name": "B", "price": 20 },
  { "name": "C", "price": 50 },
  { "name": "D", "price": 15 }
]
