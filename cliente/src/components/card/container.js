import React, { useState } from "react";
import View from "./views/view";

const Card = () => {
  const [isHover, setIshover] = useState(false);
  return <View isHover={isHover} setIshover={setIshover} />;
};
export default Card;
