import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default class ClassCom extends Component {
  constructor(props) {
    super();
    this.state = { c : 0}
  }
  increment = () => {
    this.setState({c: this.state.c + 1})
  }
  decrement = () => {
    this.setState({c: this.state.c - 1})
  }

  componentDidMount(){
    console.log("Darshit");
  }

  componentDidUpdate()
  {
    console.log("Updating");
  }

  render(){
    return (
      <div>
        <h1>Counter Using State</h1>
        <h1>{this.state.c}</h1>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Del</button>
      </div>
    )
  }
}