import React from "react"
import { storiesOf } from '@storybook/react'
import { Navbar } from "../components/Navbar/";
import { Button } from "../components/Button/Button";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stories = storiesOf("Navbar", module);

const links = [
  { name: "Home", destination: "google.com" },
  { name: "Contact", destination: "/contact" },
  { name: "About", destination: "/about" },
  { name: "Sign up", destination: "/daniel" }
]

const modalButtons = [
  { text: "Log in", 
  icon: <FontAwesomeIcon icon={faSignInAlt} />,
  content: (
    <div>
      <h1> Log in
      </h1>
      <form id="login-form">
        <input type="text" placeholder="Emöil" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <div id="forgotText">
          <a href="url" >Forgot password??</a>
        </div>
        <Button id={"login-button"} text={<div> Log in </div>} />
      </form>
    </div>
  ) 
 },
  {
     text: "Email" 
  }
]

//const [hello, setHello] = useState("Log in");
//käyttää jsx eli html ja js sekoitus
const modalInfo = (
  <div>
    <h1> Log in
    </h1>
    <form id="login-form">
      <input type="text" placeholder="Emöil" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <div id="forgotText">
        <a href="url" >Forgot password??</a>
      </div>
      <Button id={"login-button"} text={<div> Log in </div>} />
    </form>
  </div>
)


stories.add("Navbar", () => {
  return (
    <div>
      <Navbar links={links} modalInfo={modalInfo} modalButtons={modalButtons} />
    </div>
  )
})