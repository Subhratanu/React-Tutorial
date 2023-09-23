import React from "react";
import CompB from "./CompB";

const CompC = (props) => {
  return (
    <>
      <h1>This is CompC</h1>
      <h2>Level 3</h2>
      <CompB name={props.name} level={props.level} />
    </>
  );
};

export default CompC;
