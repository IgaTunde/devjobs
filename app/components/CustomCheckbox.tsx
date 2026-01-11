// components/CustomCheckbox.jsx
"use client"; // Required for client-side interactivity in newer Next.js versions

import { useState } from "react";

const CustomCheckbox = ({ label }: {label: string}) => {
  // Initialize the state for the checkbox with a boolean value
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to update the state when the checkbox changes
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked} // Use 'checked' property to control the state
          onChange={handleOnChange} // Add the onChange handler
        />
        <span>{label}</span>
      </label>
      {/* Optional: Display the current state */}
      {/* <p>
        Is "{label}" checked? **{isChecked.toString()}**
      </p> */}
    </div>
  );
};

export default CustomCheckbox;
