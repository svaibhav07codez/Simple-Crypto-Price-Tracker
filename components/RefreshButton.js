const RefreshButton = ({ refetch }) => {
    return (
      <button onClick={refetch} className="refresh-button">
        Refresh Prices
      </button>
    );
  };
  
  export default RefreshButton;
  