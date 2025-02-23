import React, { useState } from "react";
import './Recipe.css'
const Recipe = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");

  async function fetchData() {
    let YOUR_APP_ID = "67d4795e";
    let YOUR_APP_KEY = "4bc951506ed2b592bebaa487c9ed87a8";

    try {
      let response = await fetch(
        `https://api.edamam.com/search?q=${value}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=6&calories=591-722&health=alcohol-free`
      );
      let RecipeData = await response.json();
      setData(RecipeData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search Recipe"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          style={{ padding: "5px 10px", margin: "0 20px" }}
          onClick={fetchData}
        >
          Search
        </button>
      </form>

      {/* Displaying Recipe Data */}
      <div >
        {data && data.hits ? (
          <ul className="recipes">
            {data.hits.map((item, index) => (
              <li className='recipeList' key={index}>
                <h3>{item.recipe.label.slice(0,25)}</h3>
                <img className="recipe-img"
                  src={item.recipe.image}
                  alt={item.recipe.label}
                  width="100" height="100"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
