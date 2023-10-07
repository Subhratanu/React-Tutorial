import React, { useState } from "react";

export default function Todo() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [render, setRender] = useState(false);
  const [id, setId] = useState(1);
  const change = (e) => {
    setVal(e.target.value);
  };
  const submit = (e) => {
    setId(id + 1);
    let value = {
      itemId: id,
      itemVal: val,
    };
    e.preventDefault(); // Stopping the loading behaviour of page
    setTodo([...todo, value]); //Adding to Todo Array
    setRender(true);
  };
  const todoDelete = (id) => {
    let todoArr = todo.filter((item) => {
      return item.itemId !== id;
    });
    setTodo(todoArr);
  };
  return (
    <>
      <h1>This is my Todo!!!</h1>
      <form onSubmit={submit}>
        <input type="text" name="input1" value={val} onChange={change} />
        <input type="submit" value={"Add"} />
      </form>
      {render &&
        todo.map((item, key) => (
          <>
            <br />
            <span>{item.itemVal}</span>
            <button
              onClick={() => {
                todoDelete(item.itemId);
              }}
            >
              Delete
            </button>
            <br />
          </>
        ))}
    </>
  );
}
