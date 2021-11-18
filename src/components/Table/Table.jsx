import React from "react";
import { useState, useEffect } from "react"
import Pagination from "../Pagination/Pagination";
import { Tabledata } from "../Tabledata/Tabledata";

export const Table = ({ parentData, parentHeaders }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginate = pageNumber => setCurrentPage(pageNumber)


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentPages = filteredData.slice(indexOfFirstRow, indexOfLastRow)



  useEffect(() => {
    setData(parentData);
    setFilteredData(parentData);
    setSortedData(parentData)
    setSortBy(parentHeaders[0].property);
  }, [])

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value, typeof (e.target.value))
    //käsitellä alkuperäistä dataa | handle the original data
    const result = sortedData.filter(data => {
      //haetaan objektin avaimet ja niiden arvot | get object's keys and their values
      const personData = Object.keys(data).map(key => {
        return data[key];
      }) //objekti on muuttunut listaksi, jossa on vain objektin arvoja | object has changed to array where is just object's values
      const newString = personData.join(); //listan arvot liitetään yhteen merkkijonoksi | array's values will connect into a string
      return newString.includes(e.target.value) //tarkastetaan jos merkkijonoon sisältyy filteri | check if there is filter included in string
    })
    //filteröi datan filterin perusteella | filters data based on the filter
    setFilteredData(result)
    //palauttaa datan filteredDatan stateen | return data into filteredData's state
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
    <div className="tableholder">
      <div>
        <input type="text" onChange={handleFilter} name="filter" value={filter} placeholder="Search" className="table-input-style"></input>
        <Tabledata
          headers={parentHeaders}
          content={currentPages}
          handleSort={handleSort}
        />
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={filteredData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}
