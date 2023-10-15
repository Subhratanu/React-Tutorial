import React, { useState } from "react";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Card";
export default function Response() {
  const [val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  // Fetcher function
  const getFacts = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    return res.json();
  };
  const changeHandle = (e) => {
    setVal(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const filteredArray = data.data.filter((item) =>
      item.first_name.includes(val)
    );

    console.log(filteredArray);
    setArr(filteredArray);
  };

  // Using the hook
  const { data, error, isLoading } = useQuery("randomFacts", getFacts);
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading)
    return (
      <div>
        <CircularProgress />
      </div>
    );
  // Show the response if everything is fine
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="searchBox"
          value={val}
          onChange={changeHandle}
        />
        <input type="submit" value={"Search"} />
      </form>

      <h1>Data:</h1>

      {arr.map((item) => (
        <Card
          key={item.id}
          imageLink={item.avatar}
          textHeading={item.first_name + " " + item.last_name}
          textPara={item.email}
        />
      ))}
      {/* {console.log()} */}
    </div>
  );
}
