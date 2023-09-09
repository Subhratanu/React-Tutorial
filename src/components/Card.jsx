import React from "react";
import "../components/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="outer-div">
        <div className="inner-image-div">
          <img src={props.imageLink} alt="Sample kapo" className="image" />
        </div>
        <div className="inner-text-div">
          <h1>{props.textHeading}</h1>
          <p>{props.textPara}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
