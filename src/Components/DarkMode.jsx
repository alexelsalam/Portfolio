import { useEffect, useState } from "react";
import { Moon, Sun } from "../assets/Icons";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const themeMode = localStorage.getItem("theme");
    return themeMode ? JSON.parse(themeMode) : false; //mengecek theme dalam localStorage jika belum ada maka akan diset ke false
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.getElementById("bubble").classList.add("active");
    } else {
      document.documentElement.classList.remove("dark");
      document.getElementById("bubble").classList.remove("active");
    }
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="fixed top-0 right-4 md:right-20 lg:right-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center justify-center w-10 h-16"
      >
        {darkMode ? (
          <Sun className="w-7 text-primary animate-fade-up animate-duration-1000 animate-delay-300" />
        ) : (
          <Moon className="w-7 text-secondary animate-fade-down animate-duration-1000 animate-delay-300" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
