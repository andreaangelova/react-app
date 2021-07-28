import { Component } from "react";

class DescriptionClass extends Component {
  render() {
    return (
      <div>
        <p>{this.props.description}</p>
        {this.props.loadMoreInfo && (
          <button onClick={this.props.loadMoreInfo}>Load More</button>
        )}
      </div>
    );
  }
}

export default DescriptionClass;
