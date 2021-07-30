import classNames from "classnames";
import { Component } from "react";
import Clothes from "./Clothes";
import "./Shop.css";

class Shop extends Component {
  state = { isWomen: true };
  isZara = true;
  render() {
    let h1Style = classNames({
      menu: true,
      italic: this.isZara,
    });

    return (
      <div>
        <h1 className={h1Style}>Welcome to Zara shop</h1>
        {this.state.isWomen ? (
          <Clothes
            isWomen
            changeClothes={() =>
              this.setState({ isWomen: !this.state.isWomen })
            }
          />
        ) : (
          <Clothes
            changeClothes={() =>
              this.setState({ isWomen: !this.state.isWomen })
            }
          />
        )}
      </div>
    );
  }
}

export default Shop;
