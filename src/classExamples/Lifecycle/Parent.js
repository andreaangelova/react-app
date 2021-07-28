import { Component } from "react";
import Lifecycle from "./Lifecycle";

class Parent extends Component {
  state = { showComponent: true };
  render() {
    return (
      <div>
        {this.state.showComponent && <Lifecycle />}
        <button onClick={() => this.setState({ showComponent: false })}>
          Remove Lifecycle Component
        </button>
      </div>
    );
  }
}

export default Parent;
