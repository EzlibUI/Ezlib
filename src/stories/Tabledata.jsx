import React from "react";
import '../../styles.css';

export const Tabledata = ({ headers, content, handleSort }) => {

  return (
    <div className="tableholder">
      <table>
        <tr> {/*Headerin data */}
          {headers.map(header => {
            console.log(headers)
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
    </div>
  )
}
rgb(116, 112, 112)