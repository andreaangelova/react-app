import { Component } from "react";

class Lifecycle extends Component {
  state = { courses: [] };
  timer;
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentDidMount = () => {
    console.log("ComponentDidMount");
    this.timer = setTimeout(() => {
      this.setState({ courses: ["Api ", "HTML ", "Css ", "JS "] });
    }, 6000);
  };

  componentWillUnmount = () => {
    console.log("Component will Unmount");
    clearTimeout(this.timer);
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("ComponentDidUpdate");

    if (prevState != this.state && this.state.login) {
      alert("You are logged in");
    }

    // console.log("new props");
    // console.log(this.props);
    // console.log("new state");
    // console.log(this.state);

    // console.log("previous props");
    // console.log(prevProps);
    // console.log("previous state");
    // console.log(prevState);
    // this.setState({ courses: ["Advanced", "React"] });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1>This is Lifecycle component</h1>
        <p>These are your courses {this.state.courses}</p>
        <button
          onClick={() =>
            this.setState({ courses: ["React ", "HTTypeScriptML "] })
          }
        >
          Trigger update
        </button>
        <button onClick={() => this.setState({ login: true })}>Log in</button>
      </div>
    );
  }
}

export default Lifecycle;
