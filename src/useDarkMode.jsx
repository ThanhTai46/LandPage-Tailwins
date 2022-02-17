import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.theme === "dark"
  );
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const pre = isDarkMode ? "light" : "dark";
    html.classList.remove(pre);
    const next = isDarkMode ? "dark" : "light";
    html.classList.add(next);
    localStorage.setItem("theme", next);
  }, [isDarkMode]);
  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
