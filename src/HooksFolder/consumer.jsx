import React from "react";
import { userContext } from "../App"
let options = {
  backdropFilter: "2px",
  backgroundColor: "red",
  display: "inline-block",
  cursor: "pointer",
  color: "white",
  padding: "5px",
};
const consumer = () => {
  return (
    <div>
      <userContext.Consumer>
        {(age) => <p style={options}>{age}</p>}
      </userContext.Consumer>
    </div>
  );
};

export default consumer;
