import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import recipeService from "../services/recipe.service";
import { useNavigate } from "react-router-dom";

function RecipesList() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setRecipeName(event.target.value);
  };

  const searchRecipe = (e) => {    
    e.preventDefault();
    setLoading(true); 
    recipeService
      .getOneByQuery({recipeQuery:recipeName}) 
      .then((response) => {
        console.log(recipeName);
        console.log("hola");
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
console.log(recipes);
  useEffect(() => {
    setLoading(true);
    recipeService
      .getAll()
      .then(({ data }) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const navigateToNewRecipe = () => {
    navigate(`/recipe/add`);
  };

  return (
    <article>
      <h2>Recetas</h2>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Imagen</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id}>
              <td>
                <NavLink to={`/recipe/${recipe._id}`}>
                  <span>{recipe.title}</span>
                </NavLink>
              </td>
              <td>
                <img src={recipe.image} title={recipe.title} alt={recipe.title} />
              </td>
              <td>{recipe.instructions}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form onSubmit={searchRecipe}>
        <Form.Group className="mb-3" controlId="home-recipe-form">
          <Form.Label>Busca recetas propias por nombre o crea una nueva:</Form.Label>
          <br />
          <div className="input-group">
            <Form.Control
              type="text"
              name="recipeQuery"
              placeholder="Nombre de la receta"
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <ButtonGroup aria-label="home-recipe-form">
                <Button variant="primary" type="submit">
                  Búsqueda
                </Button>
                <Button variant="success" onClick={navigateToNewRecipe}>
                  Crear receta
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Form.Group>
      </Form>
    </article>
  );
}

export default RecipesList;
