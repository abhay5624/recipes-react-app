import React, { useEffect, useState } from "react";
import Recipies from "./component/Recipies";
import Nav from "./component/Nav";
import styled from "styled-components";
function App() {
  const key = "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd";
  const host = "edamam-recipe-search.p.rapidapi.com";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple");
  const getRecipt = async () => {
    const response = await fetch(
      `https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${key}`,
          "x-rapidapi-host": `${host}`,
        },
      }
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipies(data.hits);
  };
  useEffect(() => {
    getRecipt();
    setSearch("");
  }, [query]);
  const searchvalueinput = (e) => {
    setSearch(e.target.value);
  };
  const rearchrecipt = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <AppStyle>
      <Nav />
      <SearchContainer onSubmit={rearchrecipt}>
        <SearchInput
          type="text"
          className="search-bar"
          value={search}
          onChange={searchvalueinput}
          placeholder="Enter the Ingredients......"
        />
        <ButtonStyle type="submit">Search</ButtonStyle>
      </SearchContainer>

      {recipies.map((recipies) => (
        <Recipies
          key={recipies.recipe.label}
          title={recipies.recipe.label}
          Image={recipies.recipe.image}
          calories={recipies.recipe.calories}
          label={recipies.recipe.dietLabels}
          healthlabel={recipies.recipe.healthLabels}
          ingredientLines={recipies.recipe.ingredientLines}
          ingredients={recipies.recipe.ingredients}
        />
      ))}
    </AppStyle>
  );
}

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const SearchInput = styled.input`
  width: 85%;
  padding: 0.5rem;
  margin: 2rem 0.4rem;
  border: none;
`;
const SearchContainer = styled.form`
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ButtonStyle = styled.button`
  background: #7ed9f5;
  border-radius: 5px;
  border: none;
  padding: 0.6rem;
  @media (max-width: 1300px) {
    margin: 1rem;
  }
`;

export default App;
