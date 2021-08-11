import { PureComponent } from "react";
import { Component } from "react";

class Car extends PureComponent {
  state = { model: "Corola", color: "blue", maker: "Toyota", array: [] };
  componentDidUpdate = () => {
    console.log("change in car");
    console.log(this.state);
  };
  componentDidMount = () => {
    setTimeout(
      this.setState({ model: "Corola", color: "blue", maker: "Toyota" }),
      1000
    );
  };
  changeModel = () => {
    // let stateObj = this.state;
    // stateObj.model = "Yaris";
    // this.setState(stateObj);
    let newArr = [...this.state.array];
    this.setState({
      model: "Corola",
      color: "blue",
      maker: "Toyota",
      array: newArr,
    });
  };
  render() {
    return (
      <div>
        <h1>This is the Car model</h1>
        <h2>{this.state.model}</h2>
        <h2>{this.state.color}</h2>
        <h2>{this.state.maker}</h2>
        <button onClick={this.changeModel}>Change model</button>
      </div>
    );
  }
}

export default Car;
