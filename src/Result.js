import React from 'react'

function Result(props) {
  let {date, result} = props
  let formatter = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  return (
    <tr>
      <td>
        {date.toLocaleTimeString()}
      </td>
      <td>
        {result}
      </td>
    </tr>
  )
}

export default Result