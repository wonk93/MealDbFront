import recipeService from "../services/recipe.service";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
// import authService from "../services/auth.service";
// import uploadService from '../../services/upload.service'

const CreateRecipeForm = () => {
    const [recipeData, setRecipeData] = useState({
      author: "",
      title: "",
      image: "",
      instructions: "",
      ingredients: "",
      comments: ""

    })

    const { author, title, image, instructions, ingredients, comments } = recipeData

    // const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate();

  const { error } = useContext(AuthContext);

  const handleInputChange = e => {
    const { value, name } = e.target;

    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
 
  
    recipeService
      .create(recipeData)
      .then(() => {
        navigate("/profile");
      })
      .catch(err => console.log(err));
  };

  

  return (
    <form onSubmit={handleSubmit}>
      
        <label>Author</label>
        <input
          type="author"
          value={author}
          onChange={handleInputChange}
          name="author">
          </input>
    

      <div>
        <label>Title</label>
        <input
          type="title"
          value={title}
          onChange={handleInputChange}
          name="title">
          </input>
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
          type="instructions"
          value={instructions}
          onChange={handleInputChange}
          name="instructions">
          </input>
      </div>

      <div>
        <label>Ingredients</label>
        <input
          type="ingredients"
          value={ingredients}
          onChange={handleInputChange}
          name="ingredients">
          </input>
      </div>

      <div>
        <label>Comments</label>
        <input
          type="comments"
          value={comments}
          onChange={handleInputChange}
          name="comments">
          </input>
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




























// export default function ({ recipe: { author, title, image, instructions, ingredients, comments, _id }, onClose, getService }) {
//   const [data, setData] = useState({
//     author,
//     title,
//     image,
//     instructions,
//     ingredients,
//     comments,

//   })

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`${import.meta.env.REACT_APP_API_URL}/recipe/${_id}`, data);
//       await recipeService.edit(_id, data);
//       getService();
//       onClose();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div as="form" onSubmit={handleSubmit}>
//       <header>Editar todo</header>
//       <input type='text' name={"author"} value={data.author} onChange={handleChange} />

//       {/* <button />
//       <ModalBody>
//         <FormControl>
//           <FormLabel>Author</FormLabel>
//           <input type='text' name={"author"} value={data.author} onChange={handleChange} />
//         </FormControl>
//         <FormControl mt="12px">
//           <FormLabel>Title</FormLabel>
//           <Textarea multiple type='text' name={"title"} value={data.title} onChange={handleChange} />
//         </FormControl>
//         <FormControl mt="12px">
//           <FormLabel>Image</FormLabel>
//           <input type='text' name={"image"} value={data.image} onChange={handleChange} />
//         </FormControl>
//         <FormControl mt="12px">
//           <FormLabel>Instructions</FormLabel>
//           <Input type='text' name={"instructions"} value={data.instructions} onChange={handleChange} />
//         </FormControl>
//         <FormControl mt="12px">
//           <FormLabel>Ingredients</FormLabel>
//           <input type='text' name={"ingredients"} value={data.ingredients} onChange={handleChange} />
//         </FormControl>
//         <FormControl mt="12px">
//           <FormLabel>Comments</FormLabel>
//           <input type='text' name={"comments"} value={data.comments} onChange={handleChange} />
//         </FormControl>
        
//       </ModalBody>

//       <ModalFooter>
//         <Button colorScheme='blue' mr={3} onClick={onClose}>
//           Cerrar
//         </Button>
//         <Button variant='ghost' type='submit'>Guardar</Button>
//       </ModalFooter> */}
//     </div>
//   )
// }