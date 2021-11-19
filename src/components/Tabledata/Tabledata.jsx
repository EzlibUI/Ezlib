import React from "react";
import '../../styles.css';

export const Tabledata = ({ headers, content, handleSort }) => {

  return (
    <table>
      <tr> {/* Header's data */}
        {headers.map(header => {
          console.log(headers)
          return <th onClick={handleSort} name={header.property}>{header.header}</th>
        })}
      </tr>
      { // Create a row for each object in the data
        content.map(person => {
          return (<tr>
            { // Create dataelement for each object
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
