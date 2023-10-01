import ingredientService from "../services/ingredient.service";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";


const CreateIngredientsForm = () => {
  const [ingredientsData, setingredientsData] = useState({
    imageURL: "",
    ingredients: "",
  });

  const { imageURL, ingredients } = ingredientsData;

  // const [loadingImage, setLoadingImage] = useState(false)

  const navigate = useNavigate();

  const { error } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setingredientsData({ ...ingredientsData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ingredientService
      .create(ingredientsData)
      .then(() => {
        navigate("/");
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
