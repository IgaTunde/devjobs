"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-4">
        <div className="w-5 h-5"></div>
        <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3"></div>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-4">
      {/* Sun Icon */}
      <Image
        src="/assets/desktop/icon-sun.svg"
        alt="Light mode"
        width={20}
        height={20}
        className={isDark ? "opacity-50" : "opacity-100"}
      />

      {/* Toggle Switch */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-12 h-6 bg-white dark:bg-blue-600 rounded-full transition-colors duration-300"
        aria-label="Toggle theme"
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 bg-blue-600 rounded-full transition-transform duration-300 ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      {/* Moon Icon */}
      <Image
        src="/assets/desktop/icon-moon.svg"
        alt="Dark mode"
        width={12}
        height={12}
        className={isDark ? "opacity-100" : "opacity-50"}
      />
    </div>
  );
}
