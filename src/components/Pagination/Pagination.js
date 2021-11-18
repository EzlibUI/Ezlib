import React from 'react'

const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const pageNumbers = [];
  
  
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className={currentPage === number ? "tableButton-selected" : "tableButton"}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination