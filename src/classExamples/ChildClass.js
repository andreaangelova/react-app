import { Component } from "react";

class ChildClass extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.changeText}>
          Change the text from Child Component
        </button>
      </div>
    );
  }
}

export default ChildClass;
