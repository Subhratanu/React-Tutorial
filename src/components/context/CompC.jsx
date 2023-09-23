import React, { useContext } from "react";
import { Name } from "./CompA";
const CompC = () => {
  const value = useContext(Name);
  return (
    <>
      <h1>{value.name}</h1>
      <h2>{value.level}</h2>
    </>
  );
};

export default CompC;
