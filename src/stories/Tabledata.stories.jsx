import React from "react"
import { storiesOf } from '@storybook/react'
import Tabledata from "./Tabledata";

const stories = storiesOf("Tabledata", module);

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
  { name: "Daniel", number: "056239123", hometown: "Tuusula" }]

const headers = ["nimi", "numero", "kotikunta"]

stories.add("Tabledata", () => {

  return (
    <div>
      <Tabledata content={peopleList} headers={headers} />
    </div>
  )
})