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

Users can import individual components they want to use by typing them into their js. file: `import { Table, Button, Navbar, ThemeSwitch, Card, TextContainer, Maps } from 'ezlib-ui';`. There's also a couple icons to be imported: `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";` and `import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";`. The components are independent of each other so it's possible to import only one or two components if need be. Lastly the individual components, which take in props, need to be rendered.

## Usage

The program can be created as follows:
(For react beginners we recommend copying the following code to your application and work your way from there)

```
import React from "react";
import { Table, Button, Navbar, ThemeSwitch, Card, TextContainer, Maps } from 'ezlib-ui';
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {

const links = [
  { name: "Home", destination: "/home" },
  { name: "Contact", destination: "/contact" },
  { name: "About", destination: "/about" },
  { name: "Menu", destination: "/menu" }
]
  
const modalData = [
  {
    text: "Log in",
    icon: <FontAwesomeIcon icon={faSignInAlt} />,
    content: (
      <div>
        <h1> Log in </h1>

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

const tableHeaders = [
  { header: "Name", property: "name" },
  { header: "Number", property: "number" },
  { header: "Hometown", property: "hometown" },
  { header: "Picture", property: "picture" }
]

const tableList = [
  { name: "Daniel", number: "0562391232", hometown: "Las Vegas", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "0562398542", hometown: "Houston", picture: (<img src="http://www.suomensiiliyhdistys.fi/wp-content/uploads/2012/07/suklaa.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "0568761232", hometown: "San Antonio", picture: (<img src="https://qph.fs.quoracdn.net/main-qimg-c63bc4aeebeffe10a3697a62176fd978-lq" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "0562397632", hometown: "Chicago", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiFkS-c5cwEDQE-ynNBqjsKeAx_mnHgURpHFNFAkee7L3pMQDMavq4el2U7ddfKLrXvA&usqp=CAU" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "0562496232", hometown: "Dallas", picture: (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbW_5qGdM57K3D1edFkneXfRqw9uzlVsdjA&usqp=CAU" alt="Logo" height="70px" width="70px" />) }
]

  return (
    <div>
      <Navbar links={links} modalData={modalData}>
        <ThemeSwitch />
      </Navbar>
      <Table tableList={tableList} tableHeaders={tableHeaders} rowAmount={3} />
      <TextContainer>
        <h1>Delicious Pizza</h1>
        <p>
          Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century. Prior to that time, flatbread was often topped with ingredients such as garlic, salt, lard, and cheese. It is uncertain when tomatoes were first added and there are many conflicting claims. Until about 1830, pizza was sold from open-air stands and out of pizza bakeries.
        </p>
        <p>
          Source: https://en.wikipedia.org/wiki/Pizza
        </p>
      </TextContainer>
      <Card 
        image="https://cdn.discordapp.com/attachments/764051613810950183/917766866687131658/unknown.png"
        text="A freshly baked pizza with tasty toppings" 
        button={<Button text="Learn more" size="medium"/>}
        title="Stone oven pizza"
      />
      <Card 
        image="https://cdn.discordapp.com/attachments/764051613810950183/917795586932101130/unknown.png"
        text="A freshly baked pizza with tasty toppings"  
        button={<Button text="Learn more" size="medium"/>}
        title="Roman style pizza"
      />
      <Card 
        image="https://cdn.discordapp.com/attachments/764051613810950183/917791748523180032/unknown.png"
        text="A freshly baked pizza with tasty toppings" 
        button={<Button text="Learn more" size="medium"/>}
        title="Jones' pizza"
      />
      <Maps width={"100%"} height={"400"} location={"New York"} zoom={"15"} />
    </div>
  );
}
```

Which would look like this:

<img width="1440" alt="Screenshot 2021-12-07 at 17 27 02" src="https://user-images.githubusercontent.com/72009857/145057891-558b4ee8-3a2b-405b-b2b3-e05572366bd0.png">

<img width="1440" alt="Screenshot 2021-12-07 at 17 29 32" src="https://user-images.githubusercontent.com/72009857/145058096-e656d407-13a1-4518-8247-c21cf4859ba9.png">

### Navbar
#### const links

`const links` -table takes in objects, which have `name` and `destination` -attributes. These objects create links to the navbar, which by pressing, redirect the user to the location, which is defined in the `destination` -attribute.

![image](https://user-images.githubusercontent.com/78149945/142477747-d68ab3b9-e95a-458a-b145-4e5b5b36b0ef.png)

### Modal
#### const modalData

`const modalData` -table takes in objects, which have `text`, `icon` and `content` -attributes. each object in modalData acts as a separate independent modal window. The `text` -attribute creates a link to the navbar, which by pressing, open the modal window. The `icon` -attribute creates a neat icon for the modal link.

![image](https://user-images.githubusercontent.com/78149945/142477887-5f922194-5a41-47c8-b25b-f9b9bfc9a9a1.png)

The `content` -attribute takes in jsx-code, through which modal-window contents are defined. The user can create new input fields for example.

![image](https://user-images.githubusercontent.com/78149945/142477952-be3714ce-9039-4d78-9b6c-a177a81c8d22.png)

### Table component

#### const tableHeader

`const tableHeader` -table takes in objects, which have `header` and `property` -attributes. The `header` attribute is the name of the <th> element, which doesn't appear in the code. The `property` -attribute creates the text for each individual object in the table header.

![image](https://user-images.githubusercontent.com/78149945/142480205-fe95f3a3-5ab1-4663-8b6c-0e7e8be66468.png)

#### const tableList

`const tableList` -table takes in objects, which by default have `name`, `number`, `hometown` and `picture` -attributes. These objects will appear as rows in the table component. There's no limit to objects here and there's a built in pagination functionality in the component. User's can create more attributes for the objects, but it's recommended to increase the number of header objects, so that there are as many `const header` -objects as there are const `tableList` -attributes. Otherwise the table won't look optimal.
  
#### Table prop rowAmount

The rowAmount prop in the table component receives a number that determines the amount of rows shown in a single table page.
  
  Example:
  ```
  <Table tableList={tableList} tableHeaders={tableHeaders} rowAmount={3} />
  ```
  Result:
  
  <img width="1440" alt="Screenshot 2021-12-07 at 17 45 32" src="https://user-images.githubusercontent.com/72009857/145060800-175bd397-6db3-462d-ae6a-c2734cffb35f.png">


### Card
Card component receives four props: `image, text, title, button`. Each prop is optional.
  - image receives a URL link of an image
  - text receives text that will be used in the description of the card
  - title receives a string that will be used as the title of the card
  - button receives a jsx component of the users choice. Usually a button or an `<a>` tag with a link.
  
  Example: 
  ```
  <Card 
      image="https://cdn.discordapp.com/attachments/764051613810950183/917766866687131658/unknown.png"
       text="A freshly baked pizza with tasty toppings" 
       button={<Button text="Learn more" size="medium"/>}
       title="Stone oven pizza"
  />
  ```
  
  Result:
  
  ![image](https://user-images.githubusercontent.com/47157255/145043002-8d798d68-2d47-4330-9f31-909c1f4619f0.png)

  
### TextContainer
TextContainer is a container for text elements. The purpose of this component is to display text in a way that it matches with the theme.

  Example:
```
 <TextContainer>
      <h1>Header</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
</TextContainer>  
```
  Result:
  
  ![image](https://user-images.githubusercontent.com/47157255/145046278-3209df08-cbdc-48a4-9a99-a1f745368a48.png)

  
### Maps
The Maps component displays a Google Maps location of the user's choice. The user can adjust the width, height, location and zoom level with the appropriate props.
- width prop determines the width of the map.
- height prop determines the height of the map.
- location prop determines the location in the map.
- zoom level determines how closely zoomed the map is.

Example:
  ```
  <Maps 
     width={"100%"} 
     height={400} 
     location={Hermannin rantatie}
     zoom={16}
   />
  ```
  Result: 
  
  ![image](https://user-images.githubusercontent.com/47157255/145045988-fc13bd9a-bbf5-4e18-8674-77e79cfb497a.png)

## Codesandbox try it yourself
 
https://codesandbox.io/s/sad-hofstadter-0ipq9?file=/src/App.js
  
### Style design

Our styles are done with css and can be found from the `styles.css` file. Ezlib-UI has a built-in dark mode, which can be switched to light mode by pressing the moon symbol. Dark mode can again be activated by pressing the sun symbol.

![image](https://user-images.githubusercontent.com/78149945/142479892-1f42ae1a-2b7c-4565-a1e8-195f0e58f354.png)

![image](https://user-images.githubusercontent.com/78149945/142479945-60de2964-1822-4fc8-a56b-51e2f4be2e4d.png)

## Licenses

Ezlib-UI is published with the MIT license
