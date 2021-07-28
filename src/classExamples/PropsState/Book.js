import { Component } from "react";

class Book extends Component {
  state = { ...this.props };
  render() {
    return (
      <div>
        <h1>This is a Book</h1>
        <p>The name is {this.props.name}</p>
        <p>The author is {this.props.author}</p>
      </div>
    );
  }
}

export default Book;
