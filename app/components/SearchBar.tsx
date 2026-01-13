"use client"
import Image from "next/image";
import CustomCheckbox from "./CustomCheckbox";

const SearchBar = () => {
  return (
    <div className="w-full max-w-[1110px]  bg-white dark:bg-slate-900 rounded-md shadow-sm overflow-hidden py-2 z-50 mx-4 sm:mx-6 lg:mx-0 mr-20">
      {/* Desktop (md and up) */}
      <div className="hidden md:flex items-stretch">
        {/* Title / search */}
        <div className="flex items-center gap-3 px-4 py-3 flex-1">
          <Image
            src="/assets/desktop/icon-search.svg"
            alt="search icon"
            width={24}
            height={24}
          />
          <span className="text-sm text-slate-950 opacity-50 dark:text-slate-200">
            Filter by title,<span className="lg:inline hidden"> companies, expertise</span>...
          </span>
        </div>

        {/* Desktop separators and middle column */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-3 px-4 py-3 border-l border-r border-slate-200 dark:border-slate-700">
          <Image
            src="/assets/desktop/icon-location.svg"
            alt="location icon"
            width={17}
            height={24}
          />
          <span className="text-sm text-slate-950 opacity-50 dark:text-white">
            Filter by location...
          </span>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center gap-3 px-4 py-3">
          <CustomCheckbox label="Full Time Only"/>
          <button className="text-sm text-white font-bold bg-indigo-500 rounded-md py-2 px-8">
            Search
          </button>
        </div>
      </div>

      {/* Mobile & Tablet (below md) */}
      <div className="md:hidden flex items-center justify-between gap-3 px-4 py-2">
        <span className="text-sm opacity-50 text-gray-500 dark:text-slate-400">
          Filter by title...
        </span>
        <div className="flex items-center gap-4">
          <Image
            src="/assets/mobile/icon-filter.svg"
            alt="filter icon"
            width={17}
            height={24}
          />
          <div className="bg-indigo-500 justify-center items-center flex p-2 rounded-md">
            <Image
              src="/assets/mobile/icon-search-white.svg"
              alt="search icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
