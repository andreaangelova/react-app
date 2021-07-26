import React from "react";
class TestClass extends React.Component {
  name = "Andrea";
  names = ["Andrea ", "Angelova"];
  getName = () => {
    return <h1>{this.name}</h1>;
  };
  render = () => {
    return (
      <div>
        <h1>Hello from Class {this.getName}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  };
}

export default TestClass;
