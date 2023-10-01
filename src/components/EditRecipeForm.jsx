import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipeService from "../services/recipe.service";
import { useNavigate } from "react-router-dom";

function EditRecipeForm() {
  const [data, setData] = useState({});
  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    recipeService.getOneById(recipeId).then(({ data }) => setData(data));
  }, [recipeId]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      recipeService.editRecipe(recipeId, data);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar todo</h2>
      <label>
        Author
        <input
          type="text"
          name="author"
          value={data.author || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Título
        <input
          type="text"
          name="title"
          value={data.title || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Image
        <input
          type="text"
          name="image"
          value={data.imageURL || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Instructions
        <input
          type="text"
          name="instructions"
          value={data.instructions || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Ingredients
        <input
          type="text"
          name="ingredients"
          value={data.ingredients || ""}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default EditRecipeForm;
