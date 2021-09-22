import React from "react"
import { storiesOf } from '@storybook/react'
import Table from "./Table";

const stories = storiesOf("Table", module);

const peopleList = [
  { name: "bliver", number: "081239123", hometown: "Helsinki" },
  { name: "aoonas", number: "071239123", hometown: "Kerava" },
  { name: "ciika", number: "054123912", hometown: "Kerava" },
  { name: "diska", number: "041239123", hometown: "Helsinki" },
  { name: "eaniel", number: "056239123", hometown: "Tuusula" },
  { name: "fliver", number: "061239123", hometown: "Helsinki" },
  { name: "gliver", number: "021239123", hometown: "Helsinki" }]

const headers = [
  { header: "Nimi", property: "name" },
  { header: "Numero", property: "number" },
  { header: "Kotikunta", property: "hometown" }
]

stories.add("Table", () => {

  return (
    <div>
      <Table parentData={peopleList} parentHeaders={headers} />
    </div>
  )
})

