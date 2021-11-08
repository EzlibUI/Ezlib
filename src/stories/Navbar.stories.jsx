import React from "react"
import { storiesOf } from '@storybook/react'
import { Navbar } from "../components/Navbar/";
import { Button } from "../components/Button/Button";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeSwitch } from "../components/ThemeSwitch";

const stories = storiesOf("Navbar", module);

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

// const textArea = [
//   <textarea>
//     Content of the textarea.
//   </textarea>
// ]

//const [hello, setHello] = useState("Log in");
//käyttää jsx eli html ja js sekoitus
// const modalInfo = (
//   <div>
//     <h1> Log in
//     </h1>
//     <form id="login-form">
//       <input type="text" placeholder="Email" />
//       <br />
//       <input type="password" placeholder="Password" />
//       <br />
//       <div id="forgotText">
//         <a href="url" >Forgot your password?</a>
//       </div>
//       <Button id={"login-button"} text={<div> Sign up </div>} />
//     </form>
//   </div>
// )


stories.add("Navbar", () => {
  return (
    <div>
      <Navbar links={links} modalData={modalData}>
        <ThemeSwitch /> {/* Huom! props.children */}
      </Navbar>
    </div>
  )
})