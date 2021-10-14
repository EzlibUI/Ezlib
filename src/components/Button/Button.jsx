import React from "react";

export const Button = ({ event, text }) => {

  const clickEvents = () => {
    clickAnimation();
    event();
  }

  return (
    <button id="button" onClick={clickEvents} >{text} <span className="button-click-effect"></span></button>
  )
}
