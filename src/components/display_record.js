import React from 'react'

export default function display_record(props) {
  return (
    <tr>
    <td>{props.date}  </td>
    <td>{props.time}  </td>
    <td>{props.day}</td>
    <td>{props.activity}  </td>
    <td>{props.place}</td>
    </tr>
  )
}
