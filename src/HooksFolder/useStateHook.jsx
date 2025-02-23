import React from "react";
import { useState , useEffect } from "react";
const useStateHook = () => {
  let [timer,setTimers] = useState(59);
  let [car, setCar] = useState({
    color: "red",
    brand: "Ford",
    year: "1969",
    model: "mustang",
  });
let [state,setState]=useState(false);
let changer = ()=>{
if(!state){
  setCar({
    color:'red',
    brand:"Ferrari",
    year:"1970",
    model:"supreme"
  })
  setState(!state);
}
else{
  setCar({
    color: "red",
    brand: "Ford",
    year: "1969",
    model: "mustang",
  })
  setState(!state);
}
}
useEffect(()=>{
  setTimeout(()=>{
    if(timer > 0){
    setTimers(timer - 1);
  }
  },1000);
},[timer])
  return (
    <div>
      <h1>This is my {car.brand} brand car</h1>
      <p>
        This is my car model{car.model} and color is {car.color} and
        manufactured year is {car.year}
      </p>
      <p className="Timer">Timer:{timer}</p>
      <button type="submit" onClick={changer}>Change Car</button>
    </div>
  );
};

export default useStateHook;

