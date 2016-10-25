import React, { Component } from 'react'
import Result from './Result'

function ResultList(props) {
  const {results} = props
  let resultToRender = results.map( item => <Result key={item.date} date={item.date} result={item.result} />)
  return (
    <div className="ResultList">
      <h2>results table</h2>
      <table>
        <tbody>
        <tr>
          <th>
            Date
          </th>
          <th>
            Result
          </th>
        </tr>
          {resultToRender}
        </tbody>

      </table>
    </div>

  )
}

export default ResultList