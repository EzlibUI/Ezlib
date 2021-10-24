# Ohjelmistoprojekti II Ezlib

## Tiimi

Oliver Hyryläinen, Daniel Tarsalainen, Joonas Niskanen, Miska Vivolin ja Miika Vähänen

## Projektin idea

React kirjasto, jossa on yhdessä komponentissa useampi toiminnallisuus ja valmis dark mode tyyliasu. Ideamme on mahdollistaa nettisivun nopea alustaminen helposti ymmärrettävällä ja muokattavalla pohjalla. Tarjoamme siis käyttäjille valmiin React dark mode nettisivupohjan yhdellä npm komponentilla.


## Käyttöönotto

- Kirjastomme voi ottaa käyttöön asentamalla sen terminaalissa komennolla `npm install Ezlib-ui` tai `npm i Ezlib-ui`. 
- Komponentit saa käyttöön lisäämällä ne tiedostoon `import { Table, Button, Navbar } from 'ezlib-ui';`.

## Käyttäminen
Luo ohjelmasi esimerkiksi allaesitetyllä tavalla:

### Navbar esimerkkitoteutus

- Esimerkiksi `links` -taulukko ottaa tietoa vastaan `name`- ja `destination` -attribuuteilla. 
- id:llä kerrotaan elementeille, että ne käyttävät kirjastomme `dark-mode` tyylitiedostoamme.

```
import React from "react"
import { Table, Button, Navbar } from 'ezlib-ui';

const stories = storiesOf("Navbar", module);

const links = [
  { name: "Home", destination: "/home" },
  { name: "Contact", destination: "/contact" },
  { name: "About", destination: "/about" },
  { name: "Sign up", destination: "/signup" }
]

const modalButtons = [
  { text: "Log in",
  content: (
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


```
