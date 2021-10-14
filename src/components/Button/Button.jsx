<<<<<<< HEAD
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
=======
>>>>>>> 6e2ee2ed2194cc4b54b1d019f5da160d2215def6
