"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (t: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  [key: string]: any;
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
  enableSystem = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(defaultTheme);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      return;
    }

    if (enableSystem && window.matchMedia) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      return;
    }

    setTheme(defaultTheme);
  }, [defaultTheme, enableSystem]);

  // Apply data-theme and `dark` class for Tailwind-style dark selectors
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
