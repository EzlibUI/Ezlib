import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export const Navbar = ({ links, modalData, children }) => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [colorMode, setColorMode] = useState("dark");
    const toggle = (content) => {
        setModal(!modal);
        setModalContent(content);
    }

    // reference
    function toggleColorMode() {
        const root = document.documentElement;

        if (colorMode === "dark") {
            //settaa light mode päälle
            root.style.setProperty('--main-background-color', "#F0F0F0");
            root.style.setProperty('--modal-background-color', "#f0f0f0");
            root.style.setProperty('--input-background-color', "#ffffff");
            root.style.setProperty('--input-focused', "#EAEAEA");
            root.style.setProperty('--modal-text', "black");
            root.style.setProperty('--input-color', "#000000");
            root.style.setProperty('--modal-hover-color', "#e6e6e6");

            setColorMode("light");

        } else {
            //settaa dark mode päälle
            root.style.setProperty('--main-background-color', "#292929");
            root.style.setProperty('--nav-li-color', "white");
            root.style.setProperty('--modal-background-color', "#444444");
            root.style.setProperty('--input-background-color', "#303030");
            root.style.setProperty('--input-focused', "#373737");
            root.style.setProperty('--modal-text', "white");
            root.style.setProperty('--input-color', "#DCDBDB");
            root.style.setProperty('--modal-hover-color', "#414040");

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
                {children}
                <ul>
                    <a onClick={toggleColorMode}><FontAwesomeIcon icon={colorMode === "dark" ? faMoon : faSun} color="yellow" style={{ cursor: "pointer" }} /></a>
                    {
                    modalData 
                    ? 
                    modalData.map((modalObject, index) => {
                        return (
                            <a class="nav-option modalButton" onClick={() => toggle(modalObject.content)}>
                                {modalObject.text}  {modalObject.icon} </a>
                        )
                    })
                     : 
                     null
                     }
                </ul>
            </nav>
            <Modal show={modal} toggle={toggle} content={modalContent} />
        </div>
    )
    //Navbar();
}

