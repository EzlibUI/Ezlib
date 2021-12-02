import React from "react";
import { storiesOf } from '@storybook/react';
import { Button } from "../components/Button/Button";
import { Navbar } from "../components/Navbar/";
import { ThemeSwitch } from "../components/ThemeSwitch/";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../components/Table/";
import { TextContainer } from "../components/TextContainer";
import { Card } from "../components/Card";

const stories = storiesOf("Frontpage", module);


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

const tableHeader = [
  { header: "Name", property: "name" },
  { header: "Number", property: "number" },
  { header: "State", property: "hometown" },
  { header: "Picture", property: "picture" },
]

const tableList = [
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
    { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Daniel", number: "056239123",  hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) }
]


stories.add("Frontpage", () => {

  return (
    <div>
      <Navbar links={links} modalData={modalData}>
        <ThemeSwitch />
      </Navbar>
      <Table parentData={tableList} parentHeaders={tableHeader} />
      <TextContainer>
      <h1>Header</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      </TextContainer>
      <Card 
      image="https://nypost.com/wp-content/uploads/sites/2/2019/03/chunky-monkey-swns.jpg?quality=80&strip=all"
       text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the" 
       button={<Button text="Button" size="medium"/>}
       title="Apina chillaa"
       />
       <Card 
      image="https://nypost.com/wp-content/uploads/sites/2/2019/03/chunky-monkey-swns.jpg?quality=80&strip=all"
       text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the" 
       button={<Button text="Button" size="medium"/>}
       title="Apina chillaa"
       />
       <Card 
      image="https://nypost.com/wp-content/uploads/sites/2/2019/03/chunky-monkey-swns.jpg?quality=80&strip=all"
       text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the" 
       button={<Button text="Button" size="medium"/>}
       title="Apina chillaa"
       />
    </div>
  )
})