const CryptoTable = ({ prices, searchQuery }) => {
    const filteredCoins = Object.keys(prices).filter((coin) =>
      coin.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <tr key={coin}>
              <td>{coin.charAt(0).toUpperCase() + coin.slice(1)}</td>
              <td>${prices[coin].usd.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default CryptoTable;
  