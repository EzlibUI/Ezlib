import React from "react";
import { useState, useEffect } from "react"
import Tabledata from "./Tabledata";

const Table = ({ parentData, parentHeaders }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setData(parentData);
    setFilteredData(parentData);
    setSortedData(parentData)
    setSortBy(parentHeaders[0].property);
  }, [])

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value, typeof (e.target.value))
    //käsitellä alkuperäistä dataa
    const result = sortedData.filter(data => {
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

  const handleSort = (e) => {
    const property = e.target.getAttribute("name");
    console.log(property);

    const sortedlist = [...filteredData].sort((a, b) => {
      return ("" + a[property]).localeCompare(b[property])
    })
    setSortedData(sortedlist)
    setFilteredData(sortedlist)
  }

  console.log(parentHeaders)

  return (
    <div>
      <label For="filter">Filter by name: </label>
      <input type="text" onChange={handleFilter} name="filter" value={filter}></input>
      <Tabledata headers={parentHeaders} content={filteredData} handleSort={handleSort} />
    </div>
  )
}

export default Table;