import React, { useState } from "react";
import View from "./views/view";

const Card = () => {
  const [isHover, setIshover] = useState(false);
  const [side, setSide] = useState(true);

  return (
    <View
      isHover={isHover}
      setIshover={setIshover}
      side={side}
      setSide={setSide}
    />
  );
};
export default Card;
