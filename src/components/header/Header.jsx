import { useState, useEffect } from "react";
import "./Header.css";
const Header = () => {
  let [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handle = () => {
      setSticky(window.screenY > 100);
    };

    window.addEventListener("scroll", handle);
    window.removeEventListener("scroll", handle);
  }, []);

  return (
  
      <header className={`sticky-header ${sticky ? "scrolled" : ""}`}>
        <div style={{cursor:"pointer"}}>React Course</div>
        <nav>
          <ul>
            <li ><a href="#section1">Home</a></li>
            <li ><a href="#section2">About</a></li>
            <li ><a href="#section3">Contact</a></li>
            <li><a href="#section4">Recipe</a></li>
          </ul>
        </nav>
      </header>
   
  );
};

export default Header;
