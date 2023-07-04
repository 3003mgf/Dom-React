import { useState, useEffect, useRef } from "react";
import React from 'react';

const DarkMode = () => {
    let local = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(local);
    let refDiv = useRef();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
   
    const handleTheme = (e) =>{
        if(refDiv.current.textContent === "🌙"){
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        };
        if(refDiv.current.textContent === "☀️"){
            setTheme("light");
            localStorage.setItem("theme", "light");
        };
    }

    return ( 
        <div className={`themeBtn ${theme === "dark" && "dark-mode-on"}`} onClick={handleTheme} ref={refDiv}>{theme === "light" ? "🌙" : "☀️" }</div>
     );
}
 
export default DarkMode;