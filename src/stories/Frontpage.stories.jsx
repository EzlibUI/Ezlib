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
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Orava" height="70x" width="70px" />) }
]

const headers = [
  { header: "Nimi", property: "name" },
  { header: "Numero", property: "number" },
  { header: "Kunta", property: "hometown" },
  { header: "Kuva", property: "picture" }
]

stories.add("Frontpage", () => {

  return (
    <div>
      <Navbar links={links} modalData={modalData}>
        <ThemeSwitch />
      </Navbar>
      <Table parentData={peopleList} parentHeaders={headers} />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

        5
        paragraphs
        words
        bytes
        lists
        Start with 'Lorem
        ipsum dolor sit amet...'
      </p>
      <h1></h1>
    </div>
  )
})