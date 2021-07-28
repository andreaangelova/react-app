import { Component } from "react";
import DescriptionClass from "./DescriptionClass";

class HomeClass extends Component {
  state = {
    title: "Our React App",
    description: "This is a react app that you can run with npm start",
  };

  loadMoreInfo = () => {
    this.setState({
      title: "Our React App",
      description:
        "This is a react app that you can run with npm start and you can test with npm test",
    });
  };

  render() {
    return (
      <div>
        <h1>This is Home Page</h1>
        <h2>{this.state.title}</h2>
        <DescriptionClass
          description={this.state.description}
          loadMoreInfo={this.loadMoreInfo}
          showButton
        />
      </div>
    );
  }
}

export default HomeClass;
