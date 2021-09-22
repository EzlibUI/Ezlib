import React, { useState } from "react";
import { useEffect } from "react";
import './checkbox.css'

const Checkbox = ({ name, id, content }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='checkbox' >
      <input name={name} id={id} type="checkbox" />
      <label>{content}</label>
    </div>
  )
}

export default Checkbox