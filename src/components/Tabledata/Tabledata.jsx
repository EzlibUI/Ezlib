import React from "react";
import '../../styles.css';

export const Tabledata = ({ headers, content, handleSort }) => {

  return (
    <table>
      <tr> {/*Headerin data | Header's data */}
        {headers.map(header => {
          console.log(headers)
          return <th onClick={handleSort} name={header.property}>{header.header}</th>
        })}
      </tr>
      { // Luodaan jokaiselle datan objektille rivi | Create
        content.map(person => {
          return (<tr>
            { // luodaan dataelementit objektin jokaiselle ominaisuudelle | Create dataelement 
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
