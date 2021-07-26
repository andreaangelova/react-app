export const IlijaFunc = () => {
  let array = [];
  for (let index = 0; index < 5; index++) {
    array.push(index);
  }
  return (
    <span>
      the array is : {array[0]} {array[1]} {array[3]}
    </span>
  );
};

export default IlijaFunc;
