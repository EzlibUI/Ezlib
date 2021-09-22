import React from "react";
import { useState, useEffect } from "react"
import Tabledata from "./Tabledata";

const Table = ({ parentData, parentHeaders }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setData(parentData);
    setFilteredData(parentData);
  }, [])

  const handleFilter = (e) => {
    setFilter(e.target.value);
    //käsitellä alkuperäistä dataa
    const result = data.filter(data => {
      //haetaan objektin avaimet ja niiden arvot
      const personData = Object.keys(data).map(key => {
        return data[key];
      }) //objekti on muuttunut listaksi, jossa on vain objektin arvoja
      const newString = personData.join(); //listan arvot liitetään yhteen merkkijonoksi
      return newString.includes(e.target.value) //tarkastetaan jos merkkijonoon sisältyy filteri
    })
    //filteröi datan filterin perusteella
    setFilteredData(result)
    //palauttaa datan filteredDatan stateen
  }

  return (
    <div>
      <label For="filter">Filter by name: </label>
      <input type="text" onChange={handleFilter} name="filter" value={filter}></input>
      <Tabledata headers={parentHeaders} content={filteredData} />
    </div>
  )
}

export default Table;