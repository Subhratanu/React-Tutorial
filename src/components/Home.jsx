import React from "react";
import "./Home.css";
import imageFile from "../images/imagefile.png";
const Home = () => {
  const styles = {
    backgroundColor: "yellow",
  };
  return (
    <>
      <div style={styles}>
        <h2 className="heading">This our First Component</h2>
        <p>How are you doing???</p>
        <span>Before Break</span>
        <br />
        <span style={{ color: "green", fontSize: "20px" }}>After Break</span>
        <img src={imageFile} alt="Sample" height={500} width={500} />
      </div>
    </>
  );
};

export default Home;
