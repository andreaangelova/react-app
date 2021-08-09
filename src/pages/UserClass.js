import React, { Component } from "react";

class UserClass extends Component {
  state = {};
  componentDidUpdate = () => {
    console.log("change");
  };
  render() {
    return (
      <h1>
        Your name: {this.props.name} and surname: {this.props.surname}
      </h1>
    );
  }
}

export default UserClass;
