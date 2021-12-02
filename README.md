# Ezlib-UI

https://github.com/EzlibUI/Ezlib

## Creators

[Oliver Hyryläinen](https://github.com/kanaolkku), [Joonas Niskanen](https://github.com/Nekmayne), [Daniel Tarsalainen](https://github.com/DanielTarsalainen), [Miska Vivolin](https://github.com/MiskaVivolin) and [Miika Vähänen](https://github.com/migiis).

## What is Ezlib-UI?

A react library designed for programmers looking for a stylish template for their application, which when provided with raw data, operates as a ready-to-use application. Ezlib-UI is a quick and easy mobile-friendly component package, which is highly customizable for your own taste. In a nutshell, we provide our users a single npm package with multiple components, which is a ready-made react website template containing switchable dark mode style.

## Get started

This command installs the component and any packages that it depends on. 

#### npm 
`npm install ezlib-ui` or `npm i ezlib-ui`

or

#### yarn
`yarn add ezlib-ui`

Users can import individual components they want to use by typing them into their js. file: `import { Table, Button, Navbar, ThemeSwitch } from 'ezlib-ui';`. There's also a couple icons to be imported: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";` and `import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";`. The components are independent of each other so it's possible to import only one or two components if need be. Lastly the individual components, which take in props, need to be rendered.

## Usage

The program can be created as follows:
(For react beginners we recommend copying the following code to your application and work your way from there)

```
import React from "react";
import { Table, Button, Navbar, ThemeSwitch } from 'ezlib-ui';
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function App() {

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
  { header: "Picture", property: "picture" }
]

const tableList = [
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) }
]

  return (
    <div>
      <Navbar links={links} modalData={modalData}>
        <ThemeSwitch />
      </Navbar>
      <Table parentData={tableList} parentHeaders={tableHeader} />
      <h1>Header</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}
```

Which would look like this:

![image](https://user-images.githubusercontent.com/78149945/142471544-69ec8eae-ac25-49ca-a8a9-549bdfa8e2f0.png)

### const links

`const links` -table takes in objects, which have `name` and `destination` -attributes. These objects create links to the navbar, which by pressing, redirect the user to the location, which is defined in the `destination` -attribute.

![image](https://user-images.githubusercontent.com/78149945/142477747-d68ab3b9-e95a-458a-b145-4e5b5b36b0ef.png)

### const modalData

`const modalData` -table takes in objects, which have `text`, `icon` and `content` -attributes. each object in modalData acts as a separate independent modal window. The `text` -attribute creates a link to the navbar, which by pressing, open the modal window. The `icon` -attribute creates a neat icon for the modal link.

![image](https://user-images.githubusercontent.com/78149945/142477887-5f922194-5a41-47c8-b25b-f9b9bfc9a9a1.png)

The `content` -attribute takes in jsx-code, through which modal-window contents are defined. The user can create new input fields for example.

![image](https://user-images.githubusercontent.com/78149945/142477952-be3714ce-9039-4d78-9b6c-a177a81c8d22.png)

### const tableHeader

`const tableHeader` -table takes in objects, which have `header` and `property` -attributes. The `header` attribute is the name of the <th> element, which doesn't appear in the code. The `property` -attribute creates the text for each individual object in the table header.

![image](https://user-images.githubusercontent.com/78149945/142480205-fe95f3a3-5ab1-4663-8b6c-0e7e8be66468.png)

### const tableList

`const tableList` -table takes in objects, which by default have `name`, `number`, `hometown` and `picture` -attributes. These objects will appear as rows in the table component. There's no limit to objects here and there's a built in pagination functionality in the component. User's can create more attributes for the objects, but it's recommended to increase the number of header objects, so that there are as many `const header` -objects as there are const `tableList` -attributes. Otherwise the table won't look optimal.

![image](https://user-images.githubusercontent.com/78149945/142478387-4d963219-ccce-4446-9dee-1f5112eba9a4.png)
  
## Codesandbox try it yourself
 
https://codesandbox.io/s/modest-resonance-j3sjh?file=/src/App.js

### Style design

Our styles are done with css and can be found from the `styles.css` file. Ezlib-UI has a built-in dark mode, which can be switched to light mode by pressing the moon symbol. Dark mode can again be activated by pressing the sun symbol.

![image](https://user-images.githubusercontent.com/78149945/142479892-1f42ae1a-2b7c-4565-a1e8-195f0e58f354.png)

![image](https://user-images.githubusercontent.com/78149945/142479945-60de2964-1822-4fc8-a56b-51e2f4be2e4d.png)

## Licenses

Ezlib-UI is published with the MIT license
