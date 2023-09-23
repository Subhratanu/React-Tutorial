import React, { createContext } from "react";

import CompB from "./CompB";
export const Name = createContext();
const CompA = () => {
  return (
    <>
      <Name.Provider value={{ name: "This is context", level: "Level 3" }}>
        <h1>This is CompA</h1>
        <h2>Level 1</h2>
        <CompB />
      </Name.Provider>
    </>
  );
};

export default CompA;
