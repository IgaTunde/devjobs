"use client";

import { useState } from "react";
import JobsList from "./components/JobsList";
import SearchBar, { SearchFilters } from "./components/SearchBar";

export default function Home() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    title: "",
    location: "",
    isFullTime: false,
  });

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    console.log("Searching with filters:", filters);
  };

  return (
    <div className="">
      <main className="px-6 sm:px-6 lg:px-24 transition-all duration-300">
        <div className="flex justify-center items-center">
          <div className="w-full -mt-7 md:-mt-8 z-50">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <JobsList filters={searchFilters} />
      </main>
    </div>
  );
}
