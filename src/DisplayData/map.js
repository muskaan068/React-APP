import React, { useEffect } from "react";
const Map =()=> {
  var numbers = [1, 2, 3, 4, 5];
  const doubleValue = numbers.map((number) => {
    return number * 2;
  });
  useEffect(() => {}, [0]);
  console.log(doubleValue);
  return <>tgfgtfgt</>;
}
export default Map;
