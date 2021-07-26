import SubFuncComponent from "./SubFuncComponent";

export const IlijaFunc = (props) => {
  let array = [];
  for (let index = 0; index < 5; index++) {
    array.push(index);
  }
  return (
    <span>
      the array is : {array[0]} {array[1]} {array[3]}
      {props.hasName && <h1>{props.name}</h1>}
      <SubFuncComponent {...props} />
    </span>
  );
};

export default IlijaFunc;
