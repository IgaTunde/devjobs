"use client";
import { useState } from "react";

const CustomCheckbox = ({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div
      className={`checkbox-wrapper justify-center items-center flex ${className}`}
    >
      <label className="flex items-center cursor-pointer">
        {/* Hidden native checkbox */}
        <input
          className="sr-only"
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        {/* Custom checkbox visual */}
        <div
          className={`w-5 h-5 opacity-100 rounded flex items-center justify-center transition-colors
            ${
              isChecked
                ? "bg-indigo-500 border-indigo-500"
                : "bg-slate-200 dark:bg-[#979797] opacity-100  hover:border-indigo-500 hover:bg-indigo-50"
            }`}
        >
          {/* Checkmark */}
          {isChecked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          )}
        </div>
        <span className="font-bold ml-3 text-sm">{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
