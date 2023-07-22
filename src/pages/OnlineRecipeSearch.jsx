// import axios from "axios";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// function OnlineRecipeSearch() {
//     const { name } = useParams();
// console.log(name)
// const [display, setDisplay]= useState([])
// axios.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then((response)=>{
//     setDisplay(response.data).catch((error)=> console.error(error))
//     console.log(display);
// })
//     return (
//         <article>
//             <h1>Receta online de {name}</h1>
            
//         </article>
//     )
// }

// export default OnlineRecipeSearch;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function OnlineRecipeSearch() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Realiza la búsqueda de recetas utilizando la API
    // Puedes reemplazar 'YOUR_API_KEY' con la clave de tu API si es necesaria
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
          </div>
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default OnlineRecipeSearch;
