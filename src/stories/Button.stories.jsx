import React from "react"
import { storiesOf } from '@storybook/react'
import { Button } from '../components/Button/Button'


const stories = storiesOf("button", module);
const sayHello = () => {
  window.alert("HELLO!")
}

stories.add("Button", () => {

  return (
    <div>
      <Button event={sayHello} text="Large" size="large" />
      <br></br>
      <Button event={sayHello} text={"Medium"} />
      <br></br>
      <Button event={sayHello} text="Small" size="small" />
    </div>
  )
})