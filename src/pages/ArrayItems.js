import { PureComponent } from "react";

class ArrayItems extends PureComponent {
  state = {};
  render() {
    return <h1>the size of this array is {this.props.array.length}</h1>;
  }
}

export default ArrayItems;
