import React, { Component, PureComponent } from "react";

class UserClass extends PureComponent {
  state = {};
  componentDidUpdate = () => {
    console.log("change");
    console.log(this.props);
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
