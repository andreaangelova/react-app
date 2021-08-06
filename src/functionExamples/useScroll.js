import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //  return (  );
};

export default useScroll;
