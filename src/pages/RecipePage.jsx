import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`api/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <article>
      {recipe ? (
        <div>
          <h1>{recipe.author}</h1>
          <p>{recipe.title}</p>
          <p>{recipe.instructions}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.comments}</p>
        </div>
      ) : (
        <p>Cargando receta...</p>
      )}
    </article>
  );
}

export default RecipePage;