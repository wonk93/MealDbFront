import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ingredientService from "../services/ingredient.service";
import { useNavigate } from "react-router-dom";

function IngredientsList() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setIngredientName(event.target.value);
  };

  const searchIngredient = (e) => {
    e.preventDefault();
    setLoading(true);

    ingredientService
      .getOneById({ ingredientName })
      .then((response) => {
        setIngredients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    ingredientService
      .getAll()
      .then(({ data }) => {
        setIngredients(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const navigateToNewIngredient = () => {
    navigate(`/ingredient/add`);
  };

  return (
    <article>
      <h2>Ingredientes</h2>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient._id}>
              <td>
                <NavLink to={`/ingredient/${ingredient._id}`}>
                  <span>{ingredient.ingredients}</span>
                </NavLink>
              </td>
              <td>
                <img
                  src={ingredient.imageURL}
                  title={ingredient.ingredients}
                  alt={ingredient.ingredients}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Form onSubmit={searchIngredient}>
        <Form.Group className="mb-3" controlId="home-ingredient-form">
          <Form.Label>
            Busca ingredientes propios por nombre o crea uno nuevo:
          </Form.Label>
          <br />
          <div className="input-group">
            <Form.Control
              type="text"
              name="ingredientQuery"
              placeholder="Nombre del ingrediente"
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <ButtonGroup aria-label="home-ingredient-form">
                <Button variant="primary" type="submit">
                  Búsqueda
                </Button>
                <Button variant="success" onClick={navigateToNewIngredient}>
                  Crear ingrediente
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Form.Group>
      </Form>
    </article>
  );
}

export default IngredientsList;
