"use client";
import { useState } from "react";

const CustomCheckbox = ({ label, className = "" }: { label: string; className?: string }) => {
  // Initialize the state for the checkbox with a boolean value
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to update the state when the checkbox changes
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className={`checkbox-wrapper justify-center items-center flex ${className}`}>
      <label className="flex items-center">
        <input
          className="w-5 h-5"
          type="checkbox"
          checked={isChecked} 
          onChange={handleOnChange} 
        />
        <span className="font-bold ml-3 text-sm">{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
