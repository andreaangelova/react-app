import React from "react";
class TestSnipperClass extends React.Component {
  name = "Andrea";
  surName = "Angelova";
  text = "Your name is " + this.name + " " + this.surName;
  textWithE6 = `Your name is ${this.name}  ${this.surName}`;
  render() {
    return (
      <div>
        <h1>This automaticly created a class</h1>
        <h1>{this.text}</h1>
        <h1>{this.textWithE6}</h1>
        <h1>{this.a}</h1>
        <h1>{this.b}</h1>
      </div>
    );
  }
}

export default TestSnipperClass;
