import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search cryptocurrency..."
      value={query}
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
