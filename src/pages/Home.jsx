import { useState, React } from "react";
import "./Home.css";
const Snehal = () => {
  const [val, setVal] = useState(0);
  // console.log(val);
  const inc = () => {
    setVal(val + 1);
  };
  const dec = () => {
    setVal(val - 1);
  };
  return (
    <>
      <div className="container">
        {
          /* {
          // Conditional Rendering
          val && <button onClick={dec}>-</button>
        } */
          val === 0 ? " " : <button onClick={dec}>-</button>
        }
        <span>{val}</span>
        {
          // Conditional Rendering
          val < 10 ? <button onClick={inc}>+</button> : " "
        }
      </div>
    </>
  );
};

export default Snehal;
