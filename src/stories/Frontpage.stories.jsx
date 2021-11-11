import React from "react";
import { storiesOf } from '@storybook/react';
import { Button } from "../components/Button/Button";
import { Navbar } from "../components/Navbar/";
import { ThemeSwitch } from "../components/ThemeSwitch/";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../components/Table/";


const stories = storiesOf("Frontpage", module);

const sayHello = () => {
  window.alert("HELLO!")
}

const links = [
  { name: "Home", destination: "/home" },
  { name: "Contact", destination: "/contact" },
  { name: "About", destination: "/about" },
  { name: "Pictures", destination: "/pictures" }
]

const modalData = [
  {
    text: "Log in",
    icon: <FontAwesomeIcon icon={faSignInAlt} />,
    content: (
      <div>
        <h1> Log in
        </h1>
        <form id="login-form">
          <input type="text" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <div className="forgotText">
            <a href="url" >Forgot your password?</a>
          </div>
          <Button id={"login-button"} text={<div> Log in </div>} />
        </form>
      </div>
    )
  },
  {
    text: "Sign up",
    content: (
      <div>
        <h1> Sign up </h1>

        <form id="signup-form">
          <input type="text" placeholder="First Name" />
          <br />
          <input type="text" placeholder="Last Name" />
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <input type="text" placeholder="Password" />
          <br />
          <input type="text" placeholder="Confirm password" />
          <br />
          <div className="forgotText"><a href="url"  >Already a member? Sign in </a></div>
          <Button id={"signup-button"} text={<div> Sign up </div>} />
        </form>
      </div>
    )
  }
]

const peopleList = [
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" },
  { name: "Oliver", number: "091239123", hometown: "Helsinki" },
  { name: "Joonas", number: "091239123", hometown: "Kerava" },
  { name: "Miika", number: "054123912", hometown: "Kerava" },
  { name: "Miska", number: "041239123", hometown: "Helsinki" },
  { name: "Daniel", number: "056239123", hometown: "Tuusula" }]

const headers = [
  { header: "Nimi", property: "name" },
  { header: "Numero", property: "number" },
  { header: "Kunta", property: "hometown" }
]

stories.add("Frontpage", () => {

  return (
    <div>
      <Navbar links={links} modalData={modalData}>
        <ThemeSwitch />
      </Navbar>
      <Table parentData={peopleList} parentHeaders={headers} />
      <p>P tekstiä</p>
      <h1>H1 Otsikko</h1>
    </div>
  )
})