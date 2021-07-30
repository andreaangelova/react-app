import { Component } from "react";
import Description from "./Description";

class Home extends Component {
  state = { showDescription: false };
  descriptionInfo = {
    title: "page name",
    text: "this is the text from app",
  };
  render() {
    return (
      <div>
        <h1>This is home component</h1>
        <button onClick={() => this.setState({ showDescription: true })}>
          Show description
        </button>
        {this.state.showDescription && (
          <Description descriptionInfo={this.descriptionInfo} />
        )}
      </div>
    );
  }
}

export default Home;
