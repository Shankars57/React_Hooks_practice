import { React, useState, useEffect } from "react";

const Weather = () => {
  let [temp, setTemp] = useState(20);
  let [msg, setMsg] = useState("");
  useEffect(() => {
    if (temp < 15) {
      setMsg(" So Cooled ");
    } else if (temp >= 15 && temp <= 25) {
      setMsg("So Good ");
    } else {
      setMsg(" So Hot ");
    }
  }, [temp]);
  return <div>Today's temperature is : - {msg}</div>;
};

export default Weather;
