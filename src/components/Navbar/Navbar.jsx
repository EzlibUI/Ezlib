import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/";

export const Navbar = ({ links, modalInfo, modalButtons }) => {

    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <nav>
                <ul class="main_nav">
                    {links.map(item => {
                        return <li><a class="nav-option" href={item.destination}>{item.name}</a></li>
                    })}
                </ul>
                <ul>
                    {modalButtons.map((modalbutton, index) => {
                        return (
                            <a class="nav-option modalButton" onClick={() => toggle()}>
                                {modalbutton.text} &ensp; {modalbutton.icon} </a>
                        )
                    })}
                </ul>
            </nav>
            <Modal show={modal} toggle={toggle} content={modalInfo} />
        </div>
    )
    //Navbar();
}

