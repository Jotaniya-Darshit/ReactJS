import React, { Component } from 'react';

export default class ClassCom extends Component {
  constructor(props) {
    super();
    this.state = { c: 0 };
  }

  incre = () => {
    this.setState({ c: this.state.c + 1 });
  };

  decre = () => {
    this.setState({ c: this.state.c - 1 });
  };

  reset = () => {
    this.setState({ c : 0 });
  };

  render() {
    return (
      <div className="paper-container">
        <h1 className="paper-title">Counter</h1>
        <h1 className={`paper-counter ${this.state.c === 0 ? 'neutral' : this.state.c > 0 ? 'positive' : 'negative'}`}>
          {this.state.c}
        </h1>
        <div className="button-container">
          <button className="paper-button increment" onClick={this.incre}>Increment</button>
          <button className="paper-button decrement" onClick={this.decre}>Decrement</button>
          <button className="paper-button reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
