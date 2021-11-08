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
      //settaa light mode päälle
      root.style.setProperty('--input-background-color', "#ffffff");
      root.style.setProperty('--input-color', "#000000");
      root.style.setProperty('--input-focused', "#EAEAEA");
      root.style.setProperty('--input-outline', "#afafa");
      root.style.setProperty('--main-background-color', "#F0F0F0");
      root.style.setProperty('--modal-background-color', "#f0f0f0");
      root.style.setProperty('--modal-hover-color', "#e6e6e6");
      root.style.setProperty('--modal-text', "black");

      setColorMode("light");

    } else {
      //settaa dark mode päälle
      root.style.setProperty('--input-background-color', "#303030");
      root.style.setProperty('--input-color', "#DCDBDB");
      root.style.setProperty('--input-focused', "#373737");
      root.style.setProperty('--input-outline', "#e40000");
      root.style.setProperty('--main-background-color', "#292929");
      root.style.setProperty('--modal-background-color', "#444444");
      root.style.setProperty('--modal-hover-color', "#414040");
      root.style.setProperty('--modal-text', "white");
      root.style.setProperty('--nav-li-color', "#8b8b8b");

      setColorMode("dark");
    }
  }

  return (
    <a onClick={toggleColorMode}><FontAwesomeIcon icon={colorMode === "dark" ? faMoon : faSun} color="yellow" style={{ cursor: "pointer" }} /></a>
  )
}