import React from 'react'

export default class PasswordEstimator extends React.Component {
  constructor(props){
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      point: 0,
      status: ''
    }
  }

  onInputChange(event){
    const point = this.scoreCounter(event.target.value)
    this.setState({
      point: point,
      status: this.status(point)
    })
  }

  scoreCounter(password){
    const loCasePoint = /[a-z]/.test(password)? 1:0
    const hiCasePoint = /[A-Z]/.test(password)? 1:0
    const passEightChar = password.length >= 8? 1: 0
    const numPoint = /[0-9]/.test(password)? 1:0
    const nonAlpNum = /[\W]/.test(password)? 1:0
    return loCasePoint + hiCasePoint + passEightChar + numPoint + nonAlpNum
  }

  status(point){
    if(point < 2){
      return 'weak'
    } else if(point < 5){
      return 'medium'
    } else {
      return 'STRONG!'
    }
  }

  render(){
    // const noAlpNum = RegExp(noAlpNum)
    return(
      <div>
        <input
        type = "text"
        onChange = {this.onInputChange}
        />
        <span>{this.state.status}</span>
      </div>
    )
  }
}