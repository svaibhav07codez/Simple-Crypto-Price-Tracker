# 🚀 Crypto Price Tracker

A simple **Crypto Price Tracker** built with **Next.js** that fetches live cryptocurrency prices using **CoinCap API**. Includes **search, auto-refresh, and manual refresh** functionality with **React Query** for state management.

---

## 📌 Features
✅ Live cryptocurrency price updates  
✅ Search bar to filter displayed cryptocurrencies  
✅ Auto-refresh every 60 seconds  
✅ Manual **"Refresh Prices"** button with loading spinner  
✅ **Beautiful UI** with responsive design  
✅ **Next.js + React Query** for optimized performance  
✅ Fully documented with **Docusaurus**  

---

## 📂 Project Structure
```
crypto-price-tracker/
│── web-app/          # Next.js application
│   ├── pages/        # Main Next.js pages
│   ├── components/   # Reusable components (e.g., Loader, CryptoTable)
│   ├── styles/       # Global & component-specific styles
│   ├── utils/        # Utility functions (e.g., API fetch)
│   ├── public/       # Static assets
│   ├── package.json  # Project dependencies
│   ├── next.config.js # Next.js configuration
│── docs/             # Docusaurus documentation
│   ├── docs/         # Markdown documentation files
│   ├── docusaurus.config.js # Docusaurus setup
│── README.md         # Project documentation
│── .gitignore        # Git ignore file
│── vercel.json       # Vercel deployment config
```

---

## 🛠️ Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS  
- **State Management**: React Query  
- **API**: CoinCap API  
- **Deployment**: Vercel  
- **Documentation**: Docusaurus  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker/web-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
```
- Open **http://localhost:3000** in your browser.

---

## 🔌 API Integration
This project uses **CoinCap API** to fetch live crypto prices.

### API Endpoint
```
https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,dogecoin,solana,cardano
```

### How It Works
1. Data is fetched using **React Query** for efficient caching.
2. **Auto-refreshes every 60 seconds**.
3. **Manual "Refresh Prices" button** fetches updated prices.

---

## 🛠️ State Management (React Query)
React Query is used for:
✅ **Efficient API caching** (avoids unnecessary re-fetching)  
✅ **Auto-refresh every 60s**  
✅ **Manual refresh handling**  

### Setup (`_app.js`)
```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
```

## 📖 Docusaurus Documentation
A complete **developer guide** is available in the `/docs` folder.

### Run Docusaurus Locally
```bash
cd docs
npm install
npm run start
```
Open **http://localhost:3001** to view the documentation.

---
