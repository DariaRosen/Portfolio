import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { class_name } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={class_name(
                "max-sm:hidden p-2 rounded-full transition-colors duration-300 focus:outline-hidden cursor-pointer"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-8 w-8 text-yellow-300" />
            ) : (
                <Moon className="h-8 w-8 text-blue-900" />
            )}
        </button>
    );
};