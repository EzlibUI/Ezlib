import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ links }) => {
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);


    const content = (<div>
        <h1>Log in
        </h1>
        <form id="login-form">
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <div id="forgotText">
                <a href="url" >Forgot password?</a>
            </div>
            <Button id={"login-button"} text={<div> Log in </div>} />
        </form>
    </div>
    )


    return (
        <div>
            <nav>
                <ul class="main_nav">
                    {links.map(item => {
                        return <li><a class="nav-option" href={item.destination}>{item.name}</a></li>
                    })}
                </ul>
                <a class="nav-option" id="login" onClick={() => toggle()}>
                    Log in&ensp;<FontAwesomeIcon icon={faSignInAlt} /></a>
            </nav>
            <Modal show={modal} toggle={toggle} content={content} />
        </div>
    )
    //Navbar();
}

export const Modal = ({ show, toggle, content }) => {
    if (!show) {
        return null;
    } else {
        return (
            <div className="modal">
                <button onClick={() => toggle()} id="exitModal">X</button>
                {/* <button onClick={() => toggle()} id="exitModal">X</button>
                <div className="modal-container">
                    <input type="text" placeholder="Email" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <a href="url">Forgot password?</a>
                    <button variant="primary">Sign up</button>
                </div> */}
                <div className="modal-container">{content}</div>
            </div>
        )
    }
}