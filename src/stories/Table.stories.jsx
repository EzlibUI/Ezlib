import React from "react"
import { storiesOf } from '@storybook/react'
import Table from "./Table";

const stories = storiesOf("Table", module);

const peopleList = [
  { id: 2334, name: "testaaja1", hobby: "sleeping", favLang: "JavaScript" },
  { id: 3125, name: "testaaja2", hobby: "eating", favLang: "C#" },
  { id: 12, name: "testaaja3", hobby: "football", favLang: "PHP" },
  { id: 653, name: "testaaja4", hobby: "hockey", favLang: "JavaScript" },
  { id: 342345, name: "testaaja5", hobby: "playing", favLang: "Python" },
  { id: 6765, name: "testaaja6", hobby: "coding", favLang: "Java" },
]

const headers = [
  { header: "ID", property: "id" },
  { header: "Nimi", property: "name" },
  { header: "Harrastus", property: "hobby" },
  { header: "Suosikki kieli", property: "favLang" }
]

stories.add("Table", () => {

  return (
    <div>
      <Table parentData={peopleList} parentHeaders={headers} />
    </div>
  )
})