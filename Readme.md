# 🌦️ Weather Now – MERN Stack Weather App  

This project is a **MERN stack application** that fetches and displays real-time weather data using **React, Tailwind CSS, Node.js, and Express**.  

It automatically provides:  
✅ City-based weather search  
✅ Current temperature & condition display  
✅ Weather icons for easy visualization  
✅ Mobile responsive UI with Tailwind CSS  

---

## 📂 Project Structure  
```bash

Weather-Now/  
│── README.md                        # Documentation  
│  
├── Backend/  
│   ├── server.js                    # Express server – API routes  
│   └── .env                         # Environment variables (API keys, PORT)  
│  
├── Frontend/  
│   └── my-app/  
│       ├── vite.config.js           # Vite configuration  
│       ├── package.json             # Frontend dependencies  
│       │  
│       ├── src/  
│       │   ├── main.jsx             # React entry point  
│       │   ├── App.jsx              # Main React component  
│       │   ├── index.css            # Tailwind CSS import  
│       │   │  
│       │   └── Components/          # Reusable UI components  
│       │       ├── weatherCard.jsx  # Card component for displaying weather  
│       │       └── weatherCodeMap.jsx # Map weather codes to labels & icons  
│  
🏗️ Architecture Diagram:  
**Frontend (React + Tailwind)** ⇆ **Backend (Express)** ⇆ **Weather API (Open-Meteo / OpenWeatherMap)**  

```
---

## ⚙️ Features  

- 🌍 Search weather by city name (e.g., *New York*)  
- 🌡️ Displays temperature, condition & weather icons  
- 🎨 Styled using **Tailwind CSS** (fully responsive)  
- 🔄 Real-time API fetching with **Axios**  
- ⚡ Fast development with **Vite**  

---

## 🔑 Prerequisites  

- Node.js (v18+)  
- npm or yarn  

---

## 🚀 Deployment Steps  

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Akhil-kr-khatri/Weather-Now.git
```

### 2️⃣ Setup Backend
```bash
cd Backend
npm install
node server.js OR nodemon.server.js
```

➡ Runs on http://localhost:5000

### 3️⃣ Setup Frontend
```bash
cd Frontend/my-app
npm install
npm run dev
```

➡ Runs on http://localhost:5173

---

## 📌 Author
## 👤 Akhil Kumar Khatri
## 📧 Contact Me: akhilkhatri2024@gmail.com
## 🌐 GitHub: Akhil-kr-khatri
---