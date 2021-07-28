import { Component } from "react";
import ChildClass from "./ChildClass";

class MainClass extends Component {
  text = "This is a text";
  state = { name: "John", surname: "Doe", text: "This is text from state" };
  constructor(props) {
    super(props);
    //this.clicked = this.clicked.bind(this);
  }
  clicked = () => {
    this.setState({
      name: "John Changed",
      surname: "Doe Changed",
      text: "Text is Changed from parent",
    });
    setTimeout(() => {
      console.log(this.state);
    }, [100]);
  };

  changedFromChildComponent = () => {
    this.setState({
      name: "John Changed from Child",
      surname: "Doe Changed from Child",
      text: "Text is Changed from Child",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.text}</h1>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.clicked}>Change text</button>
        <ChildClass
          text={this.state.text}
          changeText={this.changedFromChildComponent}
        ></ChildClass>
      </div>
    );
  }
}

export default MainClass;
