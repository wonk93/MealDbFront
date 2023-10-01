import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipeService from "../services/recipe.service";
import EditRecipeForm from "../components/EditRecipeForm";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    recipeService.getOneById(id)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleEditClick = () => {
    navigate(`/recipe/edit/${id}`);
  };

  const handleDeleteClick = async () => {
    try {
      await recipeService.deleteRecipe(id);
      navigate('/'); // Redirige a la página principal u otra página después de borrar
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <article>
      {recipe ? (
        <div>
          <h1>{recipe.author}</h1>
          <p>{recipe.title}</p>
          <p>{recipe.instructions}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.comments}</p>
          <button onClick={handleEditClick}>Editar receta</button>
          <button onClick={handleDeleteClick}>Eliminar receta</button>
        </div>
      ) : (
        <p>Cargando receta...</p>
      )}
          <button onClick={()=>navigate(-1)}>Go back</button>
        

        {showEditModal && (
        <EditRecipeForm recipe={recipe} onClose={handleCloseEditModal} getRecipe={() => {}} />
      )}
    </article>
  );
}

export default RecipePage;