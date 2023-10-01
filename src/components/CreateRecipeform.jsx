import recipeService from "../services/recipe.service";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

const CreateRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    author: "",
    title: "",
    image: "",
    instructions: "",
    ingredients: "",
    comments: [],
  });

  const { author, title, instructions, ingredients, comments } = recipeData;

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
      <label>Author</label>
      <input
        type="text"
        value={author}
        onChange={handleInputChange}
        name="author"
      ></input>

      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          name="title"
        ></input>
      </div>

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
        <label>Instructions</label>
        <input
          type="text"
          value={instructions}
          onChange={handleInputChange}
          name="instructions"
        ></input>
      </div>

      <div>
        <label>Ingredients</label>
        <input
          type="text"
          value={ingredients}
          onChange={handleInputChange}
          name="ingredients"
        ></input>
      </div>

      <div>
        <label>Comments</label>
        <input
          type="text"
          value={comments}
          onChange={handleInputChange}
          name="comments"
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

export default CreateRecipeForm;
