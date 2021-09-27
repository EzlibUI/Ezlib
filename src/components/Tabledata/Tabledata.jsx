import React from "react";
<<<<<<< HEAD
import './tabledata.css';

const Tabledata = ({ headers, content, handleSort }) => {
=======
import '../../styles.css';

export const Tabledata = ({ headers, content, handleSort }) => {
>>>>>>> f7106cac12bde74c6de6e6a95777562ee724e2c9

  return (
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
  )
}
<<<<<<< HEAD

export default Tabledata;
=======
>>>>>>> f7106cac12bde74c6de6e6a95777562ee724e2c9
