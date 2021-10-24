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
      <Button event={sayHello} text={"Button"} />
    </div>
  )
})