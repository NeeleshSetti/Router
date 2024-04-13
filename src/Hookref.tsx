import React, { useRef } from "react";

function Hookref() {
  const x = useRef(0);
  function check() {
    x.current++;
    console.log(x.current);
  }

  return (
    <>
      <h1> useRef value :{x.current}</h1>
      <button onClick={check}>click here</button>;
    </>
  );
}

export default Hookref;
