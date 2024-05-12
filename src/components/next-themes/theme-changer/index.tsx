"use-client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <button
                className={`btn border rounded-0 btn-${theme}`}
                onClick={(e) => {
                    e.preventDefault();
                    if (theme === "dark") setTheme("light");
                    else setTheme("dark");
                }}
            >
                Switch to {theme == "dark" ? "light" : "dark"} Mode
            </button>
        </>
    );
};

export default ThemeChanger;
