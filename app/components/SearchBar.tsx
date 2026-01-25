"use client";
import { useState } from "react";
import Image from "next/image";
import CustomCheckbox from "./CustomCheckbox";
import Button from "./Button";

export interface SearchFilters {
  title: string;
  location: string;
  isFullTime: boolean;
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    title: "",
    location: "",
    isFullTime: false,
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Handle input changes
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }));
  };

  const handleFullTimeChange = (checked: boolean) => {
    setFilters((prev) => ({ ...prev, isFullTime: checked }));
  };

  // Handle search submission
  const handleSearch = () => {
    onSearch(filters);
    setShowMobileFilters(false);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="w-full bg-white dark:bg-slate-900 rounded-md shadow-sm overflow-hidden z-50 lg:mx-0 px-2 md:px-4">
        {/* Desktop (md and up) */}
        <div className="hidden md:flex items-stretch justify-between">
          {/* Title / search */}
          <div className="flex items-center gap-3 py-3 flex-1">
            <Image
              src="/assets/desktop/icon-search.svg"
              alt="search icon"
              width={24}
              height={24}
            />
            <input
              type="text"
              value={filters.title}
              onChange={handleTitleChange}
              onKeyUp={handleKeyPress}
              placeholder="Filter by title, companies, expertise..."
              className="text-sm text-slate-900 dark:text-white bg-transparent outline-none w-full placeholder:opacity-50 placeholder:text-slate-900 dark:placeholder:text-white hover:placeholder:opacity-100 focus:placeholder:opacity-100"
            />
          </div>

          {/* Desktop separators and middle column */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-3 py-3 pl-5 border-l border-slate-200 dark:border-slate-700 ">
            <Image
              src="/assets/desktop/icon-location.svg"
              alt="location icon"
              width={17}
              height={24}
            
            />
            <input
              type="text"
              value={filters.location}
              onChange={handleLocationChange}
              onKeyUp={handleKeyPress}
              placeholder="Filter by location..."
              className="text-sm text-slate-900 dark:text-white bg-transparent outline-none w-full placeholder:opacity-50 placeholder:text-slate-900 dark:placeholder:text-white hover:placeholder:opacity-100 focus:placeholder:opacity-100"
            />
          </div>

          <div className="hidden md:flex flex-1 items-center justify-between pl-10 py-3 border-l border-slate-200 dark:border-slate-700">
            {/* checkbox for desktop */}
            <CustomCheckbox
              label="Full Time Only"
              className="md:hidden lg:inline-block"
              checked={filters.isFullTime}
              onChange={handleFullTimeChange}
            />
            {/* checkbox for tablet */}
            <CustomCheckbox
              label="Full Time"
              className="lg:hidden"
              checked={filters.isFullTime}
              onChange={handleFullTimeChange}
            />

            <Button title="Search" onClick={handleSearch} />
          </div>
        </div>

        {/* Mobile & Tablet (below md) */}
        <div className="md:hidden flex items-center justify-between gap-3 px-4 py-2">
          <input
            type="text"
            value={filters.title}
            onChange={handleTitleChange}
            onKeyUp={handleKeyPress}
            placeholder="Filter by title..."
            className="text-sm opacity-50 text-slate-900 dark:text-white bg-transparent outline-none flex-1 focus:opacity-100"
          />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowMobileFilters(true)}
              aria-label="Open filters"
              className="cursor-pointer"
            >
              <Image
                src="/assets/mobile/icon-filter.svg"
                alt="filter icon"
                width={17}
                height={24}
              />
            </button>
            <button
              onClick={handleSearch}
              className="bg-indigo-500 justify-center items-center flex p-2 rounded-md hover:bg-indigo-600 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Image
                src="/assets/mobile/icon-search-white.svg"
                alt="search icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <MobileFilterModal
          filters={filters}
          onLocationChange={handleLocationChange}
          onFullTimeChange={handleFullTimeChange}
          onClose={() => setShowMobileFilters(false)}
          onSearch={handleSearch}
        />
      )}
    </>
  );
};

// Mobile Filter Modal Component
interface MobileFilterModalProps {
  filters: SearchFilters;
  onLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFullTimeChange: (checked: boolean) => void;
  onClose: () => void;
  onSearch: () => void;
}

const MobileFilterModal = ({
  filters,
  onLocationChange,
  onFullTimeChange,
  onClose,
  onSearch,
}: MobileFilterModalProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6 md:hidden"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-md w-full max-w-md p-6 space-y-6 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Location Filter */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-700">
          <Image
            src="/assets/desktop/icon-location.svg"
            alt="location icon"
            width={17}
            height={24}
          />
          <input
            type="text"
            value={filters.location}
            onChange={onLocationChange}
            onKeyUp={handleKeyPress}
            placeholder="Filter by location..."
            className="text-sm text-slate-900 dark:text-white bg-transparent outline-none w-full placeholder:opacity-50"
          />
        </div>

        {/* Full Time Checkbox */}
        <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
          <CustomCheckbox
            label="Full Time Only"
            checked={filters.isFullTime}
            onChange={onFullTimeChange}
          />
        </div>

        {/* Search Button */}
        <Button title="Search" onClick={onSearch}  />
      </div>
    </div>
  );
};

export default SearchBar;
