import React from 'react'

export default function display_record(props) {
  return (
    <tr className="row100 body">
    <td className="cell100 column1">{props.date}  </td>
    <td className="cell100 column2">{props.time}  </td>
    <td className="cell100 column3">{props.day}</td>
    <td className="cell100 column4">{props.activity}  </td>
    <td className="cell100 column5">{props.place}</td>
    </tr>
  )
}
