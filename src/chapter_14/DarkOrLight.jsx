import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        const newTheme = theme === "light" ? "dark" : "light";
        console.log("Changing theme from", theme, "to", newTheme); 
        setTheme(newTheme);
    }, [theme]);
    
    

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <MainContent/>
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;