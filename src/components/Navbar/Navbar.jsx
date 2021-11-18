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

    const [topDrawer, setTopDrawer] = useState(false);

    const handleDrawer = () => {
        setTopDrawer(!topDrawer);
        toggleNavigationStyle()
    }

    return (
        <div>
            {
                topDrawer === false ?

                    <nav className="navigation-nav">
                        <button className="nav-button" onClick={handleDrawer}> <FontAwesomeIcon icon={faBars} /> </button>

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
                                            <div class="nav-modalButtons">
                                                <a class="nav-option modalButton" onClick={() => toggle(modalObject.content)}>
                                                    {modalObject.text}  {modalObject.icon} </a>
                                            </div>

                                        )
                                    })
                                    :
                                    null
                            }
                        </ul>
                    </nav>
                    :

                    <div className="mobile-navigation">
                        <button className="nav-button" onClick={handleDrawer}> <FontAwesomeIcon icon={faBars} /> </button>

                        <ul class="mobile-nav-container">
                            {links.map(item => {
                                return <li class="mobile-nav-option"><a href={item.destination}>{item.name}</a></li>
                            })}
                        </ul>

                        <ul>

                            {children}
                            {
                                modalData
                                    ?
                                    modalData.map((modalObject, index) => {
                                        return (
                                            <div class="nav-modalButtons">
                                                <div className="nav_vertical">
                                                <a class="mobile-nav-option modalButton" onClick={() => toggle(modalObject.content)}>
                                                    {modalObject.text}  {modalObject.icon} </a>
                                                </div>
                                            </div>

                                        )
                                    })
                                    :
                                    null
                            }
                        </ul>
                    </div>
            }
            <Modal show={modal} toggle={toggle} content={modalContent} />
        </div>
    )
}