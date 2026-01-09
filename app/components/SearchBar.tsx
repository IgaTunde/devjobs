import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-[1110px] bg-white dark:bg-slate-900 rounded-md shadow-sm overflow-hidden">
      <div className="sm:flex flex-col md:flex-row items-stretch hidden">
        {/* Title / search */}
        <div className="flex items-center gap-3 px-4 py-3 flex-1">
          <Image
            src="/assets/desktop/icon-search.svg"
            alt="search icon"
            width={24}
            height={24}
          />
          <span className="text-sm text-gray-500 dark:text-slate-400">
            Filter by title, companies, expertise...
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
          <span className="text-sm text-gray-500 dark:text-slate-400">
            Filter by location...
          </span>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center gap-3 px-4 py-3">
          <Image
            src="/assets/desktop/icon-check.svg"
            alt="full time icon"
            width={24}
            height={24}
          />
          <span className="text-sm text-gray-500 dark:text-slate-400">
            Full Time Only
          </span>
        </div>

        {/* <div className="md:hidden flex items-center gap-3 px-4 py-3 border-t border-slate-200 dark:border-slate-700">
          <Image
            src="/assets/desktop/icon-check.svg"
            alt="full time icon"
            width={24}
            height={24}
          />
          <span className="text-sm text-gray-500 dark:text-slate-400">
            Full Time Only
          </span>
        </div> */}
      </div>
      {/* Mobile stacked layout (visible below md) */}
      <div className="md:hidden flex items-center justify-between gap-3 px-4 py-3 border-t border-slate-200 dark:border-slate-700">
        <span className="text-sm text-gray-500 dark:text-slate-400">
          Filter by title...
        </span>
        <div className="flex items-center gap-4">

        <Image
          src="/assets/mobile/icon-filter.svg"
          alt="location icon"
          width={17}
          height={24}
      
        />
        <Image
          src="/assets/desktop/icon-search.svg"
          alt="location icon"
          width={17}
          height={24}
      
        />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
