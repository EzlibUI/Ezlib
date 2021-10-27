import React from "react";
import { useState } from "react";
import { Modal } from "../Modal/";

export const Navbar = ({ links, modalInfo, modalButtons }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <nav>
                <ul class="main_nav">
                    {/* Ottaa vastaan "links"-taulukon ja luo sen objekteista navigaatiopalkkiin linkkejä */}
                    {links.map(item => {
                        return <li><a class="nav-option" href={item.destination}>{item.name}</a></li>
                    })}
                </ul>
                <ul>
                    {/* Ottaa vastaan modalButtons-taulukon ja luo sen objekteista navigaatiopalkkiin nappeja, jotka avaavat modaali-ikkunoita*/}
                    {modalButtons.map((modalbutton) => {
                        return (
                            <a class="nav-option modalButton" onClick={() => toggle()}>
                                {modalbutton.text} &ensp; {modalbutton.icon} </a>
                        )
                    })}
                </ul>
            </nav>
            {/* Modaali-komponentti, joka tulee näkyville kun modal-tila on true.*/}
            <Modal show={modal} toggle={toggle} content={modalInfo} />
        </div>
    )
}

