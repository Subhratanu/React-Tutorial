import React from "react";

const CompA = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.level}</h2>
      {/* Props Drilling */}
    </>
  );
};

export default CompA;
