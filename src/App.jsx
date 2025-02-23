import {React , useContext , createContext} from "react";
import "./App.css";
import UseStateHook from "./HooksFolder/useStateHook";
import Consumer from "./HooksFolder/consumer";
import Map from "./HooksFolder/map";
import Todo from "../src/Todo/Todo";
import UseContextHook from "./ContextHook/UseContextHook";
import AllComp from "./components/AllComponents/AllComp";
import Props from "./propsAndState/Props";
import Recipe from "./components/recipe/Recipe";
export let userContext = createContext();
import Header from "./components/header/Header";
let state = {
  name: "Shankar",
  age: 20,
};
function App() {
  return (
    <>
    <Header/>
    <section id="section1" style={{backgroundColor:'#344'}} >
    <h1 >Section 1 Demos</h1>
      <userContext.Provider value={state.name}>
        <div>
          <UseStateHook></UseStateHook>
          <Consumer></Consumer>
        </div>
      </userContext.Provider>
      <Map></Map>
      <Todo></Todo>
      {/* <UseContextHook.Provider>
      <UseContextHook/>
      </UseContextHook.Provider> */}
      </section>
      <section id="section2" style={{backgroundColor:"#333"}}>
        <h1>Section 2 Manual and local Props</h1>
        <div>
         
          <Props/>
        </div>
      </section>
      <section id="section3" style={{backgroundColor:"#335"}}>
        <h1>Section 3 Conditional based props</h1>
        <div>
         
        <AllComp/>
        </div>
      </section>
        <section id="section4" style={{backgroundColor:"#335"}}>
        <h1>Section 4 Small Project Recipe App</h1>
        <div>
         
        <Recipe/>
        </div>
      </section>
    </>
  );
}

export default App;
