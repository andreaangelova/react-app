import { memo } from "react";

const CarFunction = (props) => {
  console.log("re-render car function");

  return (
    <div>
      <h1>This is the Car model</h1>
      <h2>{props.car.model}</h2>
      <h2>{props.car.color}</h2>
      <h2>{props.car.maker}</h2>
      {/* <button onClick={this.changeModel}>Change model</button> */}
    </div>
  );
};
const propsAreEqual = (prevProps, newProps) => {
  return prevProps.model !== newProps.model;
};

export default memo(CarFunction, propsAreEqual);
