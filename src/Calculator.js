import React, { Component } from 'react'
import ResultList from './ResultList'


class Calculator extends Component {


  render() {
    let results = [{date: '111', result: 123123123}]
    return (
      <div className="Calculator">
        <h1>React Calculator</h1>
        <input type="number"/>
        <input type="number"/>
        <select name="operations" id="operations">
          <option value="sum">+</option>
          <option value="divide">/</option>
          <option value="remainder of a division">%</option>
          <option value="">Highest prime number between A and B if available</option>
        </select>
        <button>Start</button>
        <ResultList results={results}/>
      </div>
    )
  }
}

export default Calculator