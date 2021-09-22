import React from "react";
import './tabledata.css';

const Tabledata = ({ headers, content, handleSort }) => {

  return (
    <table>
      <tr> {/*Headerin data */}
        {headers.map(header => {
          return <th onClick={handleSort} name={header.property}>{header.header}</th>
        })}
      </tr>
      { // Luodaan jokaiselle datan objektille rivi
        content.map(person => {
          return (<tr>
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
    </table>
  )
}

export default Tabledata;