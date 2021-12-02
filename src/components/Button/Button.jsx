import React from "react";
import PropTypes from 'prop-types'

export const Button = ({ event, text, id, size }) => {
  let button;
  if (!size) {
    button = "button-medium" 
  } else {
    button = `button-${size}`
}

  return (
    <button class={"button " + button} id={id} onClick={event} >{text} <span className="button-click-effect"></span></button>
  )
}
