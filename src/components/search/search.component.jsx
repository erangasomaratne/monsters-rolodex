import React from "react";
import "./search.style.css";

const Search = ({ onSearch, search, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      name="search"
      onChange={onSearch}
      value={search}
    />
  );
};

export default Search;
