import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";


const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const [pageNumbersVisible, setPageNumbersVisible] = useState([]);
  const paginationNumbers = 5;
  let lastPage = Math.ceil(totalRows / rowsPerPage);

  const calcPages = () => {
    const newArr = [];
    if(lastPage < paginationNumbers){
      for(let i = 0; i < lastPage; i++){
        newArr.push(i+1);
      }
    } else {
      for(let i = 0; i < paginationNumbers; i++){
        newArr.push(i+1);
      }
    }
    return newArr;
  }

  const addPages = (num) => {
    const newArr = [];
    
    for(let i = 0; i < paginationNumbers; i++){
      newArr.push(pageNumbersVisible[i] + num);
    }
    
    if(newArr[paginationNumbers - 1] > lastPage){
      //Hard coded for 5 pagination numbers
      newArr[0] = lastPage - 4;
      newArr[1] = lastPage - 3;
      newArr[2] = lastPage - 2;
      newArr[3] = lastPage - 1;
      newArr[4] = lastPage;
    }

    setPageNumbersVisible(newArr);
  }

  const substractPages = (num) => {
    const newArr = [];
    
    for(let i = 0; i < paginationNumbers; i++){
      newArr.push(pageNumbersVisible[i] - num);
    }

    if(newArr[0] < 1){
      newArr[0] = 1;
      newArr[1] = 2;
      newArr[2] = 3;
      newArr[3] = 4;
      newArr[4] = 5;
    }
    
    setPageNumbersVisible(newArr);
  }

  useEffect(() => {
    lastPage = Math.ceil(totalRows / rowsPerPage);
    setPageNumbersVisible(calcPages());
  }, [totalRows])

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        { pageNumbersVisible[0] > 1 ?
          <li className="page-item"><button onClick={() => substractPages(5)} className="tableButton"> <FontAwesomeIcon icon={faAngleDoubleLeft} /></button></li>
          : null
        } 
        {pageNumbersVisible.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className={currentPage === number ? "tableButton-selected" : "tableButton"}>
              {number}
            </button>
          </li>
        ))}
        { pageNumbersVisible[0] < lastPage - 4 ?
          <li className="page-item"><button onClick={() => addPages(5)} className="tableButton"><FontAwesomeIcon icon={faAngleDoubleRight} /></button></li>
          : null
        }
      </ul>
    </nav>
  )
}

export default Pagination