import React from "react";
import "./map.css";
let options = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
  height: "50px",
  gap: "10px",
};
const map = () => {
  let JsonOptions = [
    {
      name: "shankar",
      age: 20,
    },
    {
      name: "veer Babu",
      age: 17,
    },
    {
      name: "pavan",
      age: 20,
    },
    {
      name: "Chandu",
      age: 17,
    },
  ];
  console.log(JsonOptions.map((val, i) => val));

  return (
    <>
      {" "}
      <div>
        <ul>
          {JsonOptions.map((val, i) => {
            return (
              <li key={i}>
                <p>Name: {val.name} </p>
                <p>Age:  {val.age}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default map;
