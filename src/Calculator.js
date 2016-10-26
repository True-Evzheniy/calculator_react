import React, { Component } from 'react'
import ResultList from './ResultList'
0

class Calculator extends Component {
  state = {
    results: [],
    secondOperand: '',
    firstOperand: ''
  }


  render() {

    return (
      <div className="Calculator">
        <h1>React Calculator</h1>
        <input name="firstOperand" type="text" onChange={this.handleChangeOperandValue} value={this.state.firstOperand} />
        <input name="secondOperand" type="text" onChange={this.handleChangeOperandValue} value={this.state.secondOperand}/>
        <select ref="select" name="operations" id="operations">
          <option value="sum">+</option>
          <option value="divide">/</option>
          <option value="remainder of a division">%</option>
          <option value="prime number">Highest prime number between A and B if available</option>
        </select>
        <button onClick={this.calculate}>Start</button>
        <ResultList results={this.state.results}/>
      </div>
    )
  }

  handleChangeOperandValue = (ev) => {
    if(ev.target.name == 'firstOperand') {
      this.setState({
        firstOperand: ev.target.value
      })
    }
    if(ev.target.name == 'secondOperand') {
      this.setState({
        secondOperand: ev.target.value
      })
    }
  }

  calculate = (ev) => {
    const select = this.refs.select
    const currentOperation = select.options[select.selectedIndex].value
    const firstOperand = +this.state.firstOperand
    const secondOperand = +this.state.secondOperand
    let result

    switch(currentOperation) {
      case 'sum':
        result = this.summ(firstOperand, secondOperand)
        break
      case 'divide':
        if(secondOperand === 0) {
          result = 'Cannot divide by zero'
        } else {
          result = firstOperand / secondOperand
        }
        break
      case 'remainder of a division':
        if(secondOperand === 0) {
          result = 'Cannot divide by zero'
        } else {
          result = firstOperand % secondOperand
        }

        break
      case 'prime number':
        result = this.maxPrime(firstOperand, secondOperand)

    }

    const newResult = {date: new Date(), result: result, id: Date.now()}

    this.setState({
      results: this.state.results.concat([newResult])
    })
    console.log(newResult)

  }

  maxPrime = (a, b) => {
    a = Math.floor(a)
    b = Math.floor(b)
    if(a > b){
      let c = a
      a = b
      b = c
    }
    if (a < 2) a = 2
    nextPrime:
      for (let i = b; i >= a; i--) {

        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime
        }
        return i
      }
    return 'no primes'
  }

  summ = (a, b) => {
    let multiplier;
    let first = a + ''
    let second = b + ''
    let arrFirst = first.split('.')
    let arrSecond = second.split('.')
    let afterDotFirst = arrFirst[arrFirst.length -1] + ''
    let afterDotSecond = arrSecond[arrSecond - 1] + ''
    if(afterDotFirst.length > afterDotSecond.length) {
      multiplier = Math.pow(10, afterDotFirst.length)
    } else multiplier = Math.pow(10,  afterDotSecond.length )
    return (a * multiplier + b * multiplier) / multiplier
  }
}

export default Calculator