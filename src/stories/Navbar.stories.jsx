import React from "react"
import { storiesOf } from '@storybook/react'
import { Navbar } from "../components/Navbar/";
import { Button } from "../components/Button/Button";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Navbar stories simuloi käyttäjän ohjelmaa */

// storybookin ominaisuus, joka tuo komponentin esille kehitysvaiheessa.
const stories = storiesOf("Navbar", module);

//Navigaatiopalkin linkit | name on teksti, joka tulee näkyville, destination on sijainti johon siirrytään kun linkkiä klikataan
const links = [
  { name: "Home", destination: "/" },
  { name: "Contact", destination: "/contact" },
  { name: "About", destination: "/about" },
  { name: "Sign up", destination: "/signup" }
]

//Modaali-nappeja joita painamalla modaali-ikkuna aukeaa
const modalButtons = [
  {
    text: "Log in",
    icon: <FontAwesomeIcon icon={faSignInAlt} />
  },
  {
    text: "Email"
  }
]


//Modaali-ikkunan sisältö. Voi olla mitä tahansa jsx-koodia.
const modalInfo = (
  <div>
    <h1>Log in</h1>

    <form id="login-form">
      <input type="text" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <div id="forgotText">
        <a href="url" >Forgot password?</a>
      </div>
      <Button id={"login-button"} text={<div> Log in </div>} />
    </form>
  </div>
)

// Toimii samalla tavalla kuin komponentin return eli palauttaa näkyville returnissa määriteldyt komponentit.
stories.add("Navbar", () => {
  return (
    <div>
      <Navbar links={links} modalInfo={modalInfo} modalButtons={modalButtons} />
    </div>
  )
})