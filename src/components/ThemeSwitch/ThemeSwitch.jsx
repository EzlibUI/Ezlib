import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export const ThemeSwitch = () => {
  const [colorMode, setColorMode] = useState("dark");

  function toggleColorMode() {
    const root = document.documentElement;

    if (colorMode === "dark") {
      //set light mode on
      root.style.setProperty('--forgot-text', "black");
      root.style.setProperty('--input-background-color', "#ffffff");
      root.style.setProperty('--input-color', "#000000");
      root.style.setProperty('--input-focused', "#EAEAEA");
      root.style.setProperty('--input-outline', "#afafa");
      root.style.setProperty('--main-background-color', "#F0F0F0");
      root.style.setProperty('--main-color', "#292929");
      root.style.setProperty('--modal-background-color', "#f0f0f0");
      root.style.setProperty('--modal-hover-color', "#e6e6e6");
      root.style.setProperty('--modal-text', "black");
      root.style.setProperty('--table-background', "white");
      root.style.setProperty('--table-border-bottom', "#d4d4d4");
      root.style.setProperty('--table-color', "#292929");
      root.style.setProperty('--table-header', "f0f0f0");
      root.style.setProperty('--table-header-color', "#292929");
      root.style.setProperty('--text-container-color', "#e7e6e6");
      
      setColorMode("light");

    } else {
      //set dark mode on
      root.style.setProperty('--forgot-text', "white");
      root.style.setProperty('--input-background-color', "#303030");
      root.style.setProperty('--input-color', "#DCDBDB");
      root.style.setProperty('--input-focused', "#373737");
      root.style.setProperty('--input-outline', "#e40000");
      root.style.setProperty('--main-background-color', "#292929");
      root.style.setProperty('--main-color', "white");
      root.style.setProperty('--modal-background-color', "#444444");
      root.style.setProperty('--modal-hover-color', "#414040");
      root.style.setProperty('--modal-text', "white");
      root.style.setProperty('--table-background', "#383838");
      root.style.setProperty('--table-border-bottom', "#555555");
      root.style.setProperty('--table-color', "white");
      root.style.setProperty('--table-header', "#292929");
      root.style.setProperty('--table-header-color', "white");
      root.style.setProperty('--text-container-color', "#444444");
      
      setColorMode("dark");
    }
  }

  return (
    <a onClick={toggleColorMode}><FontAwesomeIcon icon={colorMode === "dark" ? faMoon : faSun} color="yellow" style={{ cursor: "pointer" }} /></a>
  )
}