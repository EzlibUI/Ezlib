import React from "react";
import './tabledata.css';

const Tabledata = ({ headers, content, handleSort }) => {

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => {
            return <th onClick={handleSort} name={header.property}>{header.header}</th>
          })}
        </tr>
      </thead>
      <tbody>
        { // Luodaan jokaiselle datan objektille rivi
          content.map(person => {
            return (<tr >
              { // luodaan dataelementit objektin jokaiselle ominaisuudelle
                Object.keys(person).map((key) => {
                  return (
                    <td>{person[key]}</td>
                  )
                })
              }
            </tr>)
          })
        }
      </tbody>
    </table>
  )
}

export default Tabledata;