import React from 'react';

export const Modal = ({ show, toggle, content }) => {
    //show-tila määrittää, onko modaali näkyvissä vai ei. Sen tila sijaitsee ylemmässä komponentissa
    if (!show) {
        return null;
    } else {
        return (
            <div className="modal">
                {/* toggle on funktio, joka vaihtaa modaalin näkyvyyden tilaa. funktion määrittely tällä hetkellä sijaitsee ylemmässä */}
                <button onClick={() => toggle()} id="exitModal">X</button>
                {/* modal-container ottaa vastaan jsx-koodia content-propsin kautta. Content propsin koodi tulee esille modaali-ikkunassa*/}
                <div className="modal-container">
                    {content}
                </div>
            </div>
        )
    }
}