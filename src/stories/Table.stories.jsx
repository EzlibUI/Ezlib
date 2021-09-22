import React from "react"
import { storiesOf } from '@storybook/react'
import Table from "./Table";

const stories = storiesOf("Table", module);

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

const headers = ["Nimi", "Numero", "Kotikunta"]

stories.add("Table", () => {

  return (
    <div>
      <Table parentData={peopleList} parentHeaders={headers} />
    </div>
  )
})