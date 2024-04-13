import React, { useState, useEffect } from "react";

function HookEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 200);
  },[]);
  return (
    <>
      <h1>count value : {count}</h1>
    </>
  );
}
export default HookEffect;
