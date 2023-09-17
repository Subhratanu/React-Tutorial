import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Endpoint = () => {
  // useEffect hook for calling API
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const btnOne = () => {
    setPage(1);
  };
  const btnTwo = () => {
    setPage(2);
  };
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((x) => {
        return x.json();
      })
      .then((y) => {
        setData(y.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <>
      <button onClick={btnOne}>Page 1</button>
      <button onClick={btnTwo}>Page 2</button>
      {data.map((item) => (
        <Card
          key={item.id}
          imageLink={item.avatar}
          textHeading={item.first_name + " " + item.last_name}
          textPara={item.email}
        />
      ))}
    </>
  );
};

export default Endpoint;
