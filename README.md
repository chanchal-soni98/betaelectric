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
![Screenshot (447)](https://github.com/user-attachments/assets/3f92a69f-c796-419b-987a-69827d86ae65)
![Screenshot (448)](https://github.com/user-attachments/assets/35bb77b9-23ab-4d22-a277-9bef712b82c6)
![Screenshot (449)](https://github.com/user-attachments/assets/9fc942b4-e9be-4271-a445-b1a504a131c8)

#### 📋 List View
![Screenshot (450)](https://github.com/user-attachments/assets/d9b81ac3-2100-45dd-a100-0f3573cb6b7a)

#### 🔍 Modal View & Edit

![Screenshot (451)](https://github.com/user-attachments/assets/4c599456-1bcc-431c-94a2-2e5583bca23d)
![Screenshot (452)](https://github.com/user-attachments/assets/798bddf2-5da6-4cf5-97e5-89051912fbd0)
![Screenshot (453)](https://github.com/user-attachments/assets/8017481a-6e5e-4feb-8f17-cb98fc68c539)

---


### 🛠️ Installation (Frontend)

```bash
git clone https://github.com/chanchal-soni98/betaelectric.git
cd betaelectric
npm install
npm run dev

backend/
│
├── controllers/       # Route handlers
├── models/            # Mongoose models
├── routes/            # API routes
├── services/          # Discount logic
├── db.js              # MongoDB connection
├── app.js             # Express setup
├── server.js          # Entry point
└── .env               # Environment variables

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

