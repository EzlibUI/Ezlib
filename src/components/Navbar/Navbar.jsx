import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/";
import { ThemeSwitch } from "../ThemeSwitch/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ links, modalData, children }) => {
    const [modal, setModal] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const toggle = (content) => {
        setModal(!modal);
        setModalContent(content);
    }





    return (
        <div>
            <nav className="navigation-nav">
            <button className="nav-button"> <FontAwesomeIcon icon={faBars} /></button>
                <div>
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
                </div>
            </nav>
            <Modal closeTimeoutMS={500} show={modal} toggle={toggle} content={modalContent} />
        </div>
    )
}