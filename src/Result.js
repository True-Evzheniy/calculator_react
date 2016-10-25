import React from 'react'

function Result(props) {
  let {date, result} = props
  return (
    <tr>
      <td>
        {date}
      </td>
      <td>
        {result}
      </td>
    </tr>
  )
}

export default Result