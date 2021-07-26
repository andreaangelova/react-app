import React from "react";
class TestClass extends React.Component {
  name = "Andrea";
  names = ["Andrea ", "Angelova"];
  getName = () => {
    return <h1>{this.name}</h1>;
  };
  render = () => <h1>Hello from Class {this.getName}</h1>;
}

export default TestClass;
