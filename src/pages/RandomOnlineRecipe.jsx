// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";



// function RandomOnlineRecipe() {
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const searchTerm = searchParams.get("search");
//     const [searchResults, setSearchResults] = useState([]);
  
//     useEffect(() => {
//       fetch(`www.themealdb.com/api/json/v1/1/random.php${searchTerm}`)
//         .then((response) => response.json())
//         .then((data) => setSearchResults(data.meals))
//         .catch((error) => console.error("Error fetching data:", error));
//     }, [searchTerm]);
  
//     return (
//       <div>
//         <h2>Resultados de búsqueda para "{searchTerm}":</h2>
//         {searchResults ? (
//           searchResults.map((recipe) => (
//             <div key={recipe.idMeal}>
//               <h3>{recipe.strMeal}</h3>
//               <p>{recipe.strInstructions}</p>
//             </div>
//           ))
//         ) : (
//           <p>No se encontraron resultados.</p>
//         )}
//       </div>
//     );
//   }

// export default RandomOnlineRecipe;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function RandomOnlineRecipe() {
  const location = useLocation();
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setRandomRecipe(data.meals[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {randomRecipe ? (
        <div>
          <h2>Receta aleatoria:</h2>
          <h3>{randomRecipe.strMeal}</h3>
          <p>{randomRecipe.strInstructions}</p>
        </div>
      ) : (
        <p>Cargando receta aleatoria...</p>
      )}
    </div>
  );
}

export default RandomOnlineRecipe;




