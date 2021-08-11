import React from "react";
import { useRef } from "react";
const Counts = () => {
  const renderCount = useRef(0);
  return (
    <p>
      Nothing has changed, but rendered:
      {renderCount.current++} time(s)
    </p>
  );
};
export default React.memo(Counts);
