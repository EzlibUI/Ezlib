import Checkbox from '../components/Checkbox/Checkbox'
import React from "react"
import { storiesOf } from '@storybook/react'

const stories = storiesOf("test app", module);

stories.add("App", () => {
  //react code here
  return (
    <div>
      <Checkbox name="eka" id={0} content="eka checkbox" />
      <Checkbox name="toka" id={1} content="toka checkbox" />
      <Checkbox name="kolmas" id={2} content="kolmas checkbox" />
    </div>
  )
})