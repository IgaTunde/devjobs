"use client";
import { useState } from "react";

const CustomCheckbox = ({ label }: { label: string }) => {
  // Initialize the state for the checkbox with a boolean value
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to update the state when the checkbox changes
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="checkbox-wrapper justify-center items-center flex">
      <label className="flex items-center">
        <input
          className="w-5 h-5"
          type="checkbox"
          checked={isChecked} // Use 'checked' property to control the state
          onChange={handleOnChange} // Add the onChange handler
        />
        <span className="font-bold ml-3">{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
