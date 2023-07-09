import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<button
			type="button"
			onClick={handleThemeSwitch}
			className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-[#1f1f2c]  border border-gray-200
			bottom-4 right-4 dark:border-gray-700 fixed z-50"
		>
			{theme === "light" ? "🌙" : "🌞"}
		</button>
	);
}

export default ThemeSwitcher;
