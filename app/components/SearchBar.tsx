"use client";
import Image from "next/image";
import CustomCheckbox from "./CustomCheckbox";
import Button from "./Button";


const SearchBar = () => {
  return (
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
          <span className="text-sm text-slate-900 opacity-50 dark:text-white  hover:text-slate-950 hover:opacity-100">
            Filter by title,
            <span className="lg:inline hidden"> companies, expertise</span>...
          </span>
        </div>

        {/* Desktop separators and middle column */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-3  py-3 border-l border-slate-200 dark:border-slate-700 ">
          <Image
            src="/assets/desktop/icon-location.svg"
            alt="location icon"
            width={17}
            height={24}
          />
          <span className="text-sm text-slate-900 opacity-50 dark:text-white hover:text-slate-950 hover:opacity-100">
            Filter by location...
          </span>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-between pl-10 py-3 border-l border-slate-200 dark:border-slate-700 ">
          {/* checkbox for desktop */}
          <CustomCheckbox
            label="Full Time Only"
            className="md:hidden lg:inline-block"
          />
          {/* checkbox for tablet */}
          <CustomCheckbox label="Full Time" className=" lg:hidden" />
          
          <Button title="Search"/>
        </div>
      </div>

      {/* Mobile & Tablet (below md) */}
      <div className="md:hidden flex items-center justify-between gap-3 px-4 py-2">
        <span className="text-sm opacity-50 text-slate-900 dark:text-white ">
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
