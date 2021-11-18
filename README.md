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



# English

## Team

Oliver Hyryläinen, Joonas Niskanen, Daniel Tarsalainen, Miska Vivolin ja Miika Vähänen

## Ezlib-UI

A react library, which has multiple functionalities in one component with a switchable dark mode style. Our goal is to provide a quick and easy base which is highly customizable for your own taste. In a nutshell, we provide our users a single npm component, which is a ready-made react dark mode website template.

## Introduction

This command installs the component and any packages that it depends on: `npm install ezlib-ui` or `npm i ezlib-ui`. Import the component by typing `import { Table, Button, Navbar } from 'ezlib-ui';` into your js file. The importable functionalities can be limited by typing only the ones your program uses inside the curly brackets, for example typing `import { Button, Navbar } from 'ezlib-ui';` if Navbar and Button are the only functionalities you need.

## Usage

For example, create your program as follows:

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
```

### Detailed instructions

The individual components within Ezlib-UI take in props. Here are specifications how the props are transmitted:

### const links

`const links` -table takes in objects, which have `name`- and `destination` -attributes. These objects create links to the navbar which by pressing, redirect the user to the location which is defined in the `destination` -attribute.

### const modalButtons

`const modalButtons` -table takes in objects, which have `text` -attributes. These `modalButtons` define buttons, which by pressing the user gets a window, which has predefined attributes. E.g., Login function.

### const modalInfo

`const modalInfo` -variable takes in jsx-code, through which modal-window contents are defined.

### Style design 


