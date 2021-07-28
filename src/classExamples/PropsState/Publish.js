import { Component } from "react";

class Publish extends Component {
  state = { ...this.props, color: "yellow" };
  render() {
    return (
      <div>
        <h1>
          Published on {this.props.published} with color {this.state.color}
        </h1>
        <button onClick={() => this.setState({ color: "pink" })}>
          Change color
        </button>
      </div>
    );
  }
}

export default Publish;
