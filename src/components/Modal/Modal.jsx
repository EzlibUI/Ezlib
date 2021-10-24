import React from 'react';

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