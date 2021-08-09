import React, { Component } from "react";

class UserClass extends Component {
  state = {};
  componentDidUpdate = () => {
    console.log("change");
    console.log(this.props);
  };
  shouldComponentUpdate = (newProps) => {
    console.log(newProps);
    console.log(this.props.name);
    if (this.props.surname != newProps.surname) return true;
    return false;
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
