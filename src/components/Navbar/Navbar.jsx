import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/";
import { ThemeSwitch } from "../ThemeSwitch/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

                        <ul className="main_nav">
                            {links.map(item => {
                                return <li><a className="nav-option" href={item.destination}>{item.name}</a></li>
                            })}
                        </ul>

                        <ul>

                            {children}
                            {
                                modalData
                                    ?
                                    modalData.map((modalObject, index) => {
                                        return (
                                            <div className="nav-modalButtons">
                                                <a className="nav-option modalButton non-mobile" onClick={() => toggle(modalObject.content)}>
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
                        <button className="nav-button mobile-nav-button" onClick={handleDrawer}> <FontAwesomeIcon icon={faTimes} /> </button>

                        <ul className="mobile-nav-container">
                            {links.map(item => {
                                return <li className="mobile-nav-option"><a href={item.destination}>{item.name}</a></li>
                            }
                            )}


                            {
                                modalData
                                    ?
                                    modalData.map((modalObject, index) => {
                                        return (
                                            <div className="nav-modalButtons">
                                                <li><a className="mobile-nav-option modalButton" onClick={() => toggle(modalObject.content)}>
                                                    {modalObject.text}  {modalObject.icon} </a></li>
                                            </div>

                                        )
                                    })
                                    :
                                    null
                            }
                            {children}
                        </ul>
                    </div>
            }
            <Modal show={modal} toggle={toggle} content={modalContent} />
        </div>
    )
}