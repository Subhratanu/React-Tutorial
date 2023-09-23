import React from "react";
import CompA from "./CompA";

const CompB = (props) => {
  return (
    <>
      <h1>This is CompB</h1>
      <h2>Level 2</h2>
      <CompA name={props.name} level={props.level} />
    </>
  );
};

export default CompB;
