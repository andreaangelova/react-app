import { Component } from "react";
import FunctionCompnent from "./FunctionComponent";

class ClassWrapp extends Component {
  state = { email: "test@test.com" };
  render() {
    return (
      <FunctionCompnent
        email={this.state.email}
        changeEmail={() => this.setState({ email: "test@testChanged.com" })}
      />
    );
  }
}

export default ClassWrapp;
