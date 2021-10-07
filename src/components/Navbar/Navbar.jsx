import React from "react";
import { useState } from "react";

export const Navbar = ({ links }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    return (
        <div>
            <nav>
                <ul>
                    {links.map(item => {
                        return <li><a href={item.destination}>{item.name}</a></li>
                    })}
                </ul>
            </nav>
            <Modal show={modal} toggle={toggle} />
            <button className="clickme" onClick={() => toggle()}>
                Modal
            </button>

        </div>

    )
    //Navbar();
}

export const Modal = ({ show, toggle }) => {
    if (!show) {
        return null;
    } else {
        return (
            <div className="modal">
                <button onClick={() => toggle()} id="exitModal">X</button>
                <div className="modal-container">
                    <input type="text" placeholder="Email" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <button variant="primary">Sign up</button>
                </div>
            </div>
        )
    }
}