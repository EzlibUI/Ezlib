import React from 'react';

export const Modal = ({ show, toggle, content }) => {
    if (!show) {
        return null;
    } else {
        return (
            <div className="background-blur">
                <div className="modal">
                    <button onClick={() => toggle()} id="exitModal">X</button>
                    <div className="modal-container">{content}</div>
                </div>
            </div>
        )
    }
}