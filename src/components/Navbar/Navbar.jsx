import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ links }) => {
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);


    const content = (<div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto doloremque, quia voluptate quos tempora accusamus impedit aliquid. Saepe, esse iure! Laudantium veniam ipsam ipsum vel quasi commodi id obcaecati.
        </h1>
        <form id="login-form">
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <a href="url" id="forgotText">Forgot password?</a>
            <br />
            <button variant="primary">Sign up <FontAwesomeIcon icon={faMugHot} /></button>
        </form>
    </div>
    )


    return (
        <div>
            <nav>
                <ul class="main_nav">
                    {links.map(item => {
                        return <li><a href={item.destination}>{item.name}</a></li>
                    })}
                </ul>
                <Modal show={modal} toggle={toggle} content={content} />
                <button className="clickme" onClick={() => toggle()}>
                    Modal
                </button>
            </nav>
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
                <button onClick={() => toggle()} id="exitModal"><FontAwesomeIcon icon={faTimes} /></button>
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