import React from "react";
import "./Home.css";
import Card from "./Card";
import kapo from "../images/kapo.jpg";
import soumo from "../images/soumo.jpg";
import deba from "../images/deba.jpg";
import sankha from "../images/sankha.jpg";
const Home = () => {
  const data = [
    {
      id: 1,
      name: "Kapataksha Biswas",
      Company: "EY",
      image: kapo,
    },
    {
      id: 2,
      name: "Soumajit Pramanick",
      Company: "ITC Infotech",
      image: soumo,
    },
    {
      id: 3,
      name: "Debanjali Kumar",
      Company: "Capgemini",
      image: deba,
    },
    {
      id: 4,
      name: "Sankhajit Roy",
      Company: "Mindtree",
      image: sankha,
    },
  ];
  return (
    <>
      <div className="div-outer">
        {data.map((item) => (
          <Card
            imageLink={item.image}
            textHeading={item.name}
            textPara={item.Company}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
