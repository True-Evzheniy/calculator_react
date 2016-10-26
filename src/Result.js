import React from 'react'

function Result(props) {
  let {date, result, action} = props

  return (
    <tr>
      <td>
        {date.toLocaleTimeString()}
      </td>
      <td>
        {action}
      </td>
      <td>
        {result}
      </td>
    </tr>
  )
}

export default Result