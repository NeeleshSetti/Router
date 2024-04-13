import React, { useContext } from "react";

const Context = React.createContext();

function Hookcontext() {
  const data = 8787;
  return (
    <Context.Provider value={data}>
      <Demo />
    </Context.Provider>
  );
}
function Demo() {
  const y = useContext (Context);
  return <h1>UseContext Value : {y}</h1>;
}
export default Hookcontext;
