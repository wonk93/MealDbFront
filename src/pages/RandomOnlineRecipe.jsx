import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/RandomOnline.css";

function RandomOnlineRecipe() {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setRandomRecipe(data.meals[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="header">
      {randomRecipe ? (
        <div>
          <h3 className="Title">{randomRecipe.strMeal}</h3>
          <p className="Instruction">{randomRecipe.strInstructions}</p>
          <Link to={"/"}>
            <button>Go back</button>
          </Link>
          <button onClick={refreshPage}>Refresh</button>
        </div>
      ) : (
        <p>Cargando receta aleatoria...</p>
      )}
    </div>
  );
}

export default RandomOnlineRecipe;
