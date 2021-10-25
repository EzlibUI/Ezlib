import React from "react";

export const Button = ({ event, text, id }) => {

  return (
    <button class="button" id={id} onClick={event} >{text} <span className="button-click-effect"></span></button>
  )
}
