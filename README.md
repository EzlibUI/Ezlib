# Ohjelmistoprojekti II Ezlib

## Tiimi

Oliver Hyryläinen, Joonas Niskanen, Daniel Tarsalainen, Miska Vivolin ja Miika Vähänen

## Projektin idea

React kirjasto, jossa on yhdessä komponentissa useampi toiminnallisuus ja valmis dark mode tyyliasu. Ideamme on mahdollistaa nettisivun nopea alustaminen helposti ymmärrettävällä ja muokattavalla pohjalla. Tarjoamme siis käyttäjille valmiin React dark mode nettisivupohjan yhdellä npm komponentilla.


## Käyttöönotto

- Kirjastomme voi ottaa käyttöön asentamalla sen terminaalissa komennolla `npm install ezlib-ui` tai `npm i ezlib-ui`. 
- Komponentit saa käyttöön lisäämällä ne tiedostoon `import { Table, Button, Navbar } from 'ezlib-ui';`.

## Käyttäminen
Luo ohjelmasi esimerkiksi allaesitetyllä tavalla:

### Ohjelman esimerkkitoteutus


```
import React from "react"
import { Button, Navbar } from 'ezlib-ui';

function App() {

  const links = [
    { name: "Home", destination: "/home" },
    { name: "Contact", destination: "/contact" },
    { name: "About", destination: "/about" },
    { name: "Sign up", destination: "/signup" }
  ]

  const modalButtons = [
    {
      text: "Log in"
    },
    {
      text: "Email"
    }
  ]

  const modalInfo = (
    <div>
      <h1> Log in
      </h1>
      <form id="login-form">
        <input type="text" placeholder="Email" />
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


  return (
    <div>
      <Navbar links={links} modalInfo={modalInfo} modalButtons={modalButtons} />
    </div>
  )
}

export default App;


```
### Tarkentavat Ohjeet

Komponentti ottaa vastaan eri propseja. Tässä on ohjeita, missä muodossa propseja välitetään komponentille:

#### const links
`const links` -taulukko ottaa vastaan objekteja, joilla on  `name`- ja `destination` -attribuutit. Nämä oliot luovat navigaatiopalkille linkkejä, jota painamalla käyttäjä ohjataan destination-kohdassa määriteltyyn sijaintiin.

#### const modalButtons
`const modalButtons` -taulukko ottaa vastaan objekteja, joilla on tällä hetkellä vain "text"-attribuutti. Nämä modalButtonsit määrittelevät nappeja, joita painamalla käyttäjä saa näkyville ikkunan, jossa on ennalta määriteltyjä elementtejä. Esimerkiksi kirjautumistoiminto.

#### const modalInfo
`const modalInfo` -muuttuja ottaa vastaan jsx-koodia, jonka kautta määritellään modaali-ikkunan sisältö.
 
#### tyyliasu
- id:llä kerrotaan elementeille, että ne käyttävät kirjastomme `dark-mode` tyylitiedostoamme.

### Lopputulos

![image](https://user-images.githubusercontent.com/47157255/138596213-dd36842b-e244-4318-93fd-7d72c5d70347.png)



# Ezlib-UI

## Creators

Oliver Hyryläinen, Joonas Niskanen, Daniel Tarsalainen, Miska Vivolin ja Miika Vähänen

## What is Ezlib-UI?

A react library designed for programmers looking for a stylish template for their application, which when provided with raw data, operates as a ready-to-use application. Ezlib-UI is a quick and easy mobile-friendly component package which is highly customizable for your own taste. In a nutshell, we provide our users a single npm package with multiple components, which is a ready-made react website template containing switchable dark mode style.

## Get started

This command installs the component and any packages that it depends on: `npm install ezlib-ui` or `npm i ezlib-ui`. The user can import the individual components they want to use by typing the import code lines into their js. file , which all include:  `import { Navbar } from "../components/Navbar/";`, `import { Button } from "../components/Button/Button";`, `import { ThemeSwitch } from "../components/ThemeSwitch/";`, `import { Table } from "../components/Table/";`, There's also a couple importable icons `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";` and `import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";`. The components are independent of each other so it is possible to import only one component for example. Lastly the individual components, which take in props, need to be rendered.

## Usage

The program can be created as follows:
(For react beginners we recommend copying the following code to your application and work your way from there)

```
import React from "react";
import { Button } from "../components/Button/Button";
import { Navbar } from "../components/Navbar/";
import { Table } from "../components/Table/";
import { ThemeSwitch } from "../components/ThemeSwitch/";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

const peopleList = [
  { name: "Daniel", number: "056239123", hometown: "Tuusula", picture: (<img src="https://image.laji.fi/MM.133557/iso-orava_Jen_Goellnitz_CC_BY-NC-SA_1_FI.jpg" alt="Logo" height="70px" width="70px" />) },
  { name: "Miska", number: "056239854", hometown: "Helsinki", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Miika", number: "056876123", hometown: "Vantaa", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Joonas", number: "056239763", hometown: "Korvatunturi", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) },
  { name: "Oliver", number: "056249623", hometown: "Addis Abeba", picture: (<img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2017/05/19/2b2d8790-3c6a-11e7-8ee3-761f02c18070_1280x720_204107.jpg?itok=hk8G0lyz" alt="Logo" height="70px" width="70px" />) }
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
      <h1>Header</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
})
```

Which would look like this:

![image](https://user-images.githubusercontent.com/78149945/142456661-727b5dfd-95e8-4d34-80c1-864e45898b3a.png)



### const links

`const links` -table takes in objects, which have `name`- and `destination` -attributes. These objects create links to the navbar which by pressing, redirect the user to the location which is defined in the `destination` -attribute.

### const modalButtons

`const modalButtons` -table takes in objects, which have `text` -attributes. These `modalButtons` define buttons, which by pressing the user gets a window, which has predefined attributes. E.g., Login function.

### const modalInfo

`const modalInfo` -variable takes in jsx-code, through which modal-window contents are defined. The user can create new input fields for example.


### Style design 


