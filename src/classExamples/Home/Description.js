import { Component } from "react";

class Description extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>{this.props.descriptionInfo.title}</h1>
        <h1>Description page</h1>
        <p>{this.props.descriptionInfo.text}</p>
        {this.props.textArrey.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    );
  }
}

export default Description;
