import React, { useEffect, useState } from "react";
import Recipies from "./component/Recipies";

import "./App.css";

function App() {
  const key = "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd";
  const host = "edamam-recipe-search.p.rapidapi.com";
  
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')
  const getRecipt = async () => {
    const response = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${key}`,
          "x-rapidapi-host": `${host}`,
        },
      }
    );
    const data = await response.json();
    
    setRecipies(data.hits);
  };
  useEffect(() => {
    getRecipt();
   setSearch('');
  }, [query]);
  const searchvalueinput = e => {
    setSearch(e.target.value);
    
  }
  const rearchrecipt = (e) => {
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={rearchrecipt}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={searchvalueinput}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipies.map((recipies) => (
        <Recipies
          key={recipies.recipe.label}
          title={recipies.recipe.label}
          Image={recipies.recipe.image}
          calories={recipies.recipe.calories}
        />
      ))}
    </div>
  );
}

export default App;
