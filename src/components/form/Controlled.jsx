import React, { useState } from "react";

const Controlled = () => {
  const [val, setVal] = useState("");
  const [sub, setSub] = useState(false);
  const [temp, setTemp] = useState(val);
  const change = (e) => {
    console.log(e);
    setVal(e.target.value);
    setSub(false);
    console.log(val);
  };
  const submitForm = (e) => {
    if (val === "") {
      alert("Please Enter Proper Value");
      e.preventDefault();
    } else {
      e.preventDefault();
      setSub(true);
      setTemp(val);
      setVal("");
    }
  };
  return (
    <>
      <h1>This is Controlled Form</h1>
      <form onSubmit={submitForm}>
        <label>Name: </label>
        <input type="text" value={val} name="name" onChange={change} />
        <button type="submit">Submit</button>
        <br />
        {sub && <h1>The value is {temp}</h1>}
      </form>
    </>
  );
};

export default Controlled;
