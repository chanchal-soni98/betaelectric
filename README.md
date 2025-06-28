# 🛒 Full Stack Project – Checkout System & Favorite NPM Packages App

This repository contains two independent applications:

1. 🧾 **Backend (Checkout System)** – A Node.js + MongoDB API that supports product listing, cart management, and discount calculations.
2. 🌐 **Frontend (Favorite NPM Packages App)** – A React + Tailwind CSS app to search, manage, and display favorite NPM packages.

---

## 🚀 Live Demo

Frontend deployed on Netlify:  
🔗 **[Visit Live App](https://heroic-halva-232e79.netlify.app)**

GitHub Repo:  
🔗 **[View Source Code](https://github.com/chanchal-soni98/betaelectric.git)**

---

## 🧩 Tech Stack

### Frontend
- React (with Hooks)
- JavaScript
- Tailwind CSS
- React Router DOM
- LocalStorage API

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JavaScript
- MVC Architecture

---

## 🌐 Frontend: Favorite NPM Packages App

### ✅ Features

- 🔍 Search for real NPM packages using `npms.io` API.
- ➕ Add a package to your favorites with a required reason.
- 🧾 View and manage your favorite packages.
- ✏️ Edit the name or reason using Edit Modal with live package suggestions.
- 🗑️ Delete with a confirmation modal.
- 💾 Data is persisted using `localStorage`.
- 💡 Responsive UI with Tailwind CSS.

### 🧭 Application Routes

| Path     | Description                            |
|----------|----------------------------------------|
| `/add`   | Search and add NPM packages to favorites |
| `/list`  | View all favorite packages              |
| `/` or `/no-favs` | Shown when there are no favorites  |

### 📸 Screenshots

#### ➕ Add Favorite

![Screenshot (454)](https://github.com/user-attachments/assets/9213c3b5-e3cf-4284-990d-4ea96751fddf)

#### 📋 List View
![Screenshot (455)](https://github.com/user-attachments/assets/4a5eb868-13d4-467a-948b-a421526e41a8)
![Screenshot (456)](https://github.com/user-attachments/assets/ee3e30ff-2a39-4383-94b8-8c5d2d980ad8)

#### 🔍 Modal View & Edit
![Screenshot (457)](https://github.com/user-attachments/assets/cac40b8e-4678-4b94-832c-1b2e9288a505)
![Screenshot (458)](https://github.com/user-attachments/assets/12c6d4b5-c6cb-4319-80c4-2434db8e6584)
![Screenshot (459)](https://github.com/user-attachments/assets/3c063660-8626-404c-a0bd-b0e2fa897d96)

---

### 🛠️ Installation (Frontend)

```bash
git clone https://github.com/chanchal-soni98/betaelectric.git
cd betaelectric
npm install
npm run dev


End point - GET /api/products
Response - [
  { "name": "A", "price": 30 },
  { "name": "B", "price": 20 },
  { "name": "C", "price": 50 },
  { "name": "D", "price": 15 }
]
Post Request - POST /api/products
Response - { "name": "A", "price": 30 }

Cart
Add to cart - POST /api/cart/add 
{ "productId": "PRODUCT_ID", "quantity": 1 }

Get Cart Details - GET /api/cart
{
  "items": [
    {
      "name": "A",
      "unitPrice": 30,
      "quantity": 3,
      "discount": 5,
      "totalPrice": 85
    }
  ],
  "total": 85,
  "totalDiscount": 5
}

cd backend
npm install
npm start

