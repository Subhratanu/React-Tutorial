import React, { useRef } from "react";

export default function Uncontrolled() {
  const val = useRef("");
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(val.current.value);
  };
  return (
    <>
      <h1>This is Uncontrolled Form</h1>
      <form onSubmit={submitForm}>
        <label>Name: </label>
        <input type="text" ref={val} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
