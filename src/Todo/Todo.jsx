import { React, useState } from "react";

const Todo = () => {
  let [list, setList] = useState("");
  let [Add, setAdd] = useState("");
  let man = (e) => {
    return (
      <>
        <ul>
          <li>{setList(e.target.value)}</li>
        </ul>
      </>
    );
  };
  let submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <form>
          <label>TODO LIST</label>
          <input
            type="text"
            className="name"
            required
            value={list}
            onChange={man}
          ></input>
          <button type="button" className="btn" onClick={submit}>
            Add
          </button>
        </form>
        <div>
          <ul>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
