import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function OnlineRecipes() {
  const navigate = useNavigate();
  let [recipeName, setRecipeName] = useState("");

  const handleInputChange = (event) => {
    setRecipeName({ name: event.target.value });
  };

  const searchRecipe = () => {
    navigate(`/recipe/online/` + recipeName.name);
  };

  // www.themealdb.com/api/json/v1/1/search.php?s=    api mealdb

  const navigateToRandomOnlineRecipe = () => {
    navigate(`/recipe/online/random`);
  };

  return (
    <article>
      <h2>Recetas online</h2>
      <Form>
        <Form.Group className="mb-3" controlId="home-recipe-form">
          <Form.Label>
            Busca recetas online por nombre o una aleatoria:
          </Form.Label>
          <br />
          <div className="input-group">
            <Form.Control
              type="text"
              placeholder="Nombre de la receta"
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <ButtonGroup aria-label="home-recipe-form">
                <Button variant="primary" onClick={searchRecipe}>
                  Búsqueda
                </Button>
                <div id="results"></div>

                <script src="../../service/mealdbservice.js"></script>
                <Button
                  variant="success"
                  onClick={navigateToRandomOnlineRecipe}
                >
                  Receta aleatoria
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Form.Group>
      </Form>
    </article>
  );
}

export default OnlineRecipes;
