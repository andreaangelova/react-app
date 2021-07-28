import { Component } from "react";

class MainClass extends Component {
  text = "This is a text";
  state = { name: "John", surname: "Doe" };
  constructor(props) {
    super(props);
    //this.clicked = this.clicked.bind(this);
  }
  clicked = () => {
    this.setState({ name: "John Changed", surname: "Doe Changed" });
    setTimeout(() => {
      console.log(this.state);
    }, [100]);
  };
  render() {
    return (
      <div>
        <h1>{this.text}</h1>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.clicked}>Change text</button>
      </div>
    );
  }
}

export default MainClass;
