import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [isSmall, setIsSamll] = useState(window.innerWidth < 700);
  const seeWindowSize = () => {
    const small = window.innerWidth < 700;
    setIsSamll(small);
    console.log(small);
  };
  useEffect(() => {
    //seeWindowSize();
    window.addEventListener("resize", seeWindowSize);
    return window.removeEventListener("resize", seeWindowSize);
  }, []);
  return isSmall;
};

export default useWindowSize;
