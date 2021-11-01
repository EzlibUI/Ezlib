import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ links, modalInfo, modalButtons }) => {
    const [modal, setModal] = useState(true);
    const [colorMode, setColorMode] = useState("dark");

    const toggle = () => setModal(!modal);

    // reference
    function toggleColorMode() {
        const root = document.documentElement;
        
        if(colorMode === "dark"){
            //settaa light mode päälle
            root.style.setProperty('--main-background-color', "#F0F0F0");
            root.style.setProperty('--modal-background-color', "#f0f0f0");
            root.style.setProperty('--input-color', "#ffffff");
            root.style.setProperty('--input-focused', "#EAEAEA")
            setColorMode("light");
        } else {
            //settaa dark mode päälle
            root.style.setProperty('--main-background-color', "#292929");
            root.style.setProperty('--nav-li-color', "white");
            root.style.setProperty('--modal-background-color', "#444444");
            root.style.setProperty('--input-color', "#303030");
            root.style.setProperty('--input-focused', "#373737")
            setColorMode("dark");
        }
    }



    return (
        <div>
            <nav>
                <ul class="main_nav">
                    {links.map(item => {
                        return <li><a class="nav-option" href={item.destination}>{item.name}</a></li>
                    })}
                </ul>
                <ul>
                    <button onClick={toggleColorMode}><FontAwesomeIcon icon={faSun}/></button>
                    {modalButtons.map((modalbutton, index) => {
                        return (
                            <a class="nav-option modalButton" onClick={() => toggle()}>
                                {modalbutton.text}  {modalbutton.icon} </a>
                        )
                    })}
                </ul>
            </nav>
            <Modal show={modal} toggle={toggle} content={modalInfo} />
        </div>
    )
    //Navbar();
}

