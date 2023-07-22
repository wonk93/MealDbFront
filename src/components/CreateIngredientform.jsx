import recipeService from "../services/recipe.service";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
// import authService from "../services/auth.service";
// import uploadService from '../../services/upload.service'

const CreateIngredientsForm = () => {
  const [recipeData, setRecipeData] = useState({
    image: "",
    ingredients: "",
  });

  const { image, ingredients } = recipeData;

  // const [loadingImage, setLoadingImage] = useState(false)

  const navigate = useNavigate();

  const { error } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    recipeService
      .create(recipeData)
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label>Image</label>
        <input
          type="image"
          value={image}
          onChange={handleInputChange}
          name="image">
          </input>
      </div> */}

      <div>
        <label>Ingredients</label>
        <input
          type="ingredients"
          value={ingredients}
          onChange={handleInputChange}
          name="ingredients"
        ></input>
      </div>

      <div>
        <button variant="solid" type="submit">
          Create
        </button>
        <Link to={"/"}>
          <button>Go back</button>
        </Link>
      </div>
      <p>{error}</p>
    </form>
  );
};

export default CreateIngredientsForm;
