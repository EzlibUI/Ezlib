import React from "react";

export const Button = ({ event, text , id}) => {

  const clickEvents = () => {
    clickAnimation();
    event();
  }

  return (
    <button class="button" id={id} onClick={clickEvents} >{text} <span className="button-click-effect"></span></button>
  )
}
