import { Component } from "react";

class Clothes extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>{this.props.isWomen ? "Women" : "Men"}</h2>
        {[1, 2, 3].map((item) => (
          <img
            style={{ width: "300px" }}
            key={item}
            src={
              this.props.isWomen
                ? `https://static.zara.net/photos///2021/I/0/1/p/3614/796/330/2/w/1126/3614796330_${item}_1_1.jpg?ts=1627037417858`
                : `https://static.zara.net/photos///2021/I/0/2/p/3057/364/044/2/w/1126/3057364044_${item}_1_1.jpg?ts=1627471287432`
            }
          ></img>
        ))}
        <br />
        <button onClick={this.props.changeClothes}>
          Change to {!this.props.isWomen ? "Women" : "Men"}
        </button>
      </div>
    );
  }
}

export default Clothes;
