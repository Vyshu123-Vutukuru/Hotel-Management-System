# 🏨 Hotel Management System

A full-stack Hotel Management System built using **Node.js**, **MySQL**, **HTML5**, **CSS3**, and **JavaScript**. It allows hotel staff to manage rooms, bookings, and guests efficiently, with features such as secure login, dashboard, admin panel, and PDF invoice generation.

---

## 🚀 Features

- ✅ Secure user & admin login
- 📊 Dashboard for real-time room availability
- 🧾 PDF invoice generation on guest checkout
- 📦 Admin panel for room and booking management
- 🔐 MySQL-based backend for persistent data
- 🌐 Frontend deployment using Vercel / Netlify
- ☁️ Backend deployment using Render / Railway

---

## 📁 Project Structure

```
HotelManagementSystem/
├── backend/
│   ├── db.sql                  # MySQL schema
│   ├── server.js               # Express backend
│   ├── routes/                 # API routes
│   ├── utils/                  # Utility functions
│   └── .env                    # Environment variables
├── frontend/
│   ├── index.html              # Login/Register
│   ├── dashboard.html          # User/Admin dashboard
│   ├── invoice.html            # Invoice page
│   ├── style.css               # Styling
│   └── script.js               # Frontend logic
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **PDF Generation:** jsPDF
- **Deployment:** Render (backend), Vercel (frontend), Railway (MySQL)

---

## 📦 Setup Instructions

### 🔧 1. Clone the repository

```bash
git clone https://github.com/yourusername/HotelManagementSystem.git
cd HotelManagementSystem
```

### 🧰 2. Backend Setup

```bash
cd backend
npm install
# Create .env file with DB credentials
node server.js
```

### 🌐 3. Frontend Setup

- Open `frontend/index.html` in browser
- Connect frontend to backend using correct API URL

---

## ☁️ Deployment Guide

- Deploy frontend via **Vercel** or **Netlify**
- Deploy backend via **Render**
- Use **Railway** or **PlanetScale** for MySQL hosting

---

## 🧾 Invoice Example

- Checkout page (`invoice.html`) uses `jsPDF` to download PDF receipt for guest billing.

---

## 📄 License

This project is licensed under the MIT License.
