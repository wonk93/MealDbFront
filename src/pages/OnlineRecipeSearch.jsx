import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function OnlineRecipeSearch() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.meals))
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchTerm]);

  return (
    <div>
      <h2>Resultados de búsqueda para "{searchTerm}":</h2>
      {searchResults ? (
        searchResults.map((recipe) => (
          <div key={recipe.idMeal}>
            <h3>{recipe.strMeal}</h3>
            <p>{recipe.strInstructions}</p>
            <Link to={"/"}>
      <button>Go back</button>
    </Link>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default OnlineRecipeSearch;
