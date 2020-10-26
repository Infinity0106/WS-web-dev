import React from "react";

export default class ReactiveCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  increaseValue(e) {
    this.setState({ value: this.state.value + 1 });
  }
  render() {
    return (
      <input
        type="button"
        value={`Counter: ${this.state.value}`}
        onClick={this.increaseValue.bind(this)}
      />
    );
  }
}
