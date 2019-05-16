import React, { Component, Fragment } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      date: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        value: ++this.state.value,
        date: new Date()
      })
    }, 1000)
  }
  componentDidUpdate(props, state) {
    console.log("DidUpdate");
    console.log(props);
    console.log(state);
  }
  componentWillMount() {
    console.log("WillMount");
    clearInterval(this.timer)
  }
  render() {
    return (
      <Fragment>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </Fragment>
    );
  }
}

export default Clock;
