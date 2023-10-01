import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ingredientService from "../services/ingredient.service";

function IngredientPage() {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    ingredientService.getOneById(id)
      .then((response) => {
        setIngredient(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      {ingredient ? (
        <div>
          <h1>{ingredient.imageURL}</h1>
          <p>{ingredient.ingredient}</p>
        </div>
      ) : (
        <p>Cargando ingrediente...</p>
      )}
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  );
}

export default IngredientPage;
