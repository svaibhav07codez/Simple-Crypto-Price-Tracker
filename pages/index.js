import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchCryptoPrices = async () => {
  const response = await fetch("https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,dogecoin,solana,cardano");
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  return data.data;
};

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });

  const filteredData = data?.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.overlay} />

      <div style={styles.container}>
        <h1 style={styles.title}>🚀 Crypto Price Tracker</h1>
        <input
          type="text"
          placeholder="🔎 Search Cryptocurrency..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.input}
          disabled={isFetching}
        />
        <button onClick={() => refetch()} style={styles.button} disabled={isFetching}>
          {isFetching ? "Refreshing..." : "🔄 Refresh Prices"}
        </button>

        {isFetching && (
          <div style={styles.overlayLoader}>
            <div style={styles.spinner} />
          </div>
        )}

        <div style={styles.priceContainer}>
          {error && <p style={styles.error}>❌ Error: {error.message}</p>}
          {isLoading ? (
            <p style={styles.loading}>Loading prices...</p>
          ) : filteredData?.length ? (
            filteredData.map((coin) => (
              <div key={coin.id} style={styles.card}>
                <h2>{coin.name} <span style={styles.symbol}>({coin.symbol.toUpperCase()})</span></h2>
                <p style={styles.price}>💰 ${parseFloat(coin.priceUsd).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p style={styles.noData}>No cryptocurrencies found.</p>
          )}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

// Styles
const styles = {
  page: { 
    position: "relative", 
    width: "100vw", 
    height: "100vh", 
    background: `url('/LSE_2023_cryptocurr-diff_460_martin.png') no-repeat center center fixed`, 
    backgroundSize: "cover", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
  },
  overlay: { 
    position: "absolute", 
    width: "100%", 
    height: "100%", 
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better contrast
    zIndex: 1 
  },
  container: { 
    position: "relative", 
    zIndex: 2, 
    maxWidth: "800px", 
    width: "90%", 
    padding: "20px", 
    textAlign: "center", 
    fontFamily: "'Poppins', sans-serif", 
    backgroundColor: "rgba(30, 30, 47, 0.85)", 
    color: "white", 
    borderRadius: "10px", 
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)" 
  },
  title: { fontSize: "32px", fontWeight: "bold", marginBottom: "20px" },
  input: { padding: "10px", width: "80%", borderRadius: "8px", border: "none", marginBottom: "10px", fontSize: "16px" },
  button: { padding: "10px 20px", fontSize: "16px", borderRadius: "8px", border: "none", cursor: "pointer", backgroundColor: "#ff9800", color: "white", transition: "0.3s" },
  priceContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" },
  card: { backgroundColor: "#292b3a", padding: "15px", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.1)", textAlign: "center" },
  symbol: { fontSize: "14px", color: "#ff9800" },
  price: { fontSize: "20px", fontWeight: "bold" },
  error: { color: "red" },
  loading: { fontSize: "18px", fontWeight: "bold" },
  noData: { fontSize: "16px", fontWeight: "bold", color: "#ff9800" },
  overlayLoader: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 },
  spinner: { width: "50px", height: "50px", border: "5px solid white", borderTop: "5px solid transparent", borderRadius: "50%", animation: "spin 1s linear infinite" },
};

export default Home;
