import React from "react";
import { useState, useEffect } from "react";
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentPages = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  useEffect(() => {
    setData(parentData);
    setFilteredData(parentData);
    setSortedData(parentData);
    setSortBy(parentHeaders[0].property);
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value, typeof e.target.value);
    // Filters data based on user input
    const result = sortedData.filter((data) => {
      // Gets object's keys and their values
      const personData = Object.keys(data).map((key) => {
        return data[key];
      }); // Object has changed to array that only contains object's values
      const newString = personData.join(); // Array's values will join into a string
      return newString.includes(e.target.value); // Check if there is filter included in a string
    });
    // Sets filtered data into filteredData state
    setFilteredData(result);
  };

  // Sorts data based on the chosen "name" attribute
  const handleSort = (e) => {
    const property = e.target.getAttribute("name");
    console.log(property);

    const sortedlist = [...filteredData].sort((a, b) => {
      return ("" + a[property]).localeCompare(b[property]);
    });
    setSortedData(sortedlist);
    setFilteredData(sortedlist);
  };
  console.log(parentHeaders);

  return (
    <div className="tableholder">
      <div>
        <input
          type="text"
          onChange={handleFilter}
          name="filter"
          value={filter}
          placeholder="Search"
          className="table-input-style"
        ></input>
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
  );
};
