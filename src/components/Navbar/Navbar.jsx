import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/";
import { ThemeSwitch } from "../ThemeSwitch/";

export const Navbar = ({ links, modalData, children }) => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const toggle = (content) => {
        setModal(!modal);
        setModalContent(content);
    }

    return (
        <div>
            <nav className="navigation-nav">
                <ul class="main_nav">
                    {links.map(item => {
                        return <li><a class="nav-option" href={item.destination}>{item.name}</a></li>
                    })}
                </ul>
                <ul>
                    {children}
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
}

