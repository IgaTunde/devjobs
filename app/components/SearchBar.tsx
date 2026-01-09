import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div><Image src="/assets/desktop/icon-search.svg" alt="search-icon" width={24} height={24}/> Filter by title, companies, expertise...</div>
      <div>Filter by location...</div> <div>Full Time Only</div>
    </div>
  );
};

export default SearchBar;
