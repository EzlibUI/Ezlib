import React from "react"
import { storiesOf } from '@storybook/react'
import { Navbar } from "../components/Navbar/";


const stories = storiesOf("Navbar", module);

const links = [
  { name: "Home", destination: "google.com" },
  { name: "Contact", destination: "/contact" },
  { name: "About", destination: "/about" },
  { name: "Sign up", destination: "/daniel" }
]



stories.add("Navbar", () => {

  return (
    <div>
      <Navbar links={links} />
    </div>
  )
})