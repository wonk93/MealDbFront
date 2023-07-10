import ImgTortilla from './../img/tortilla.jpg';
import ImgCroquetas from './../img/croquetas.jpg';
import ImgGazpacho from './../img/gazpacho.jpg';
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function RecipesList() {
    const navigate = useNavigate();
    let [recipeName, setRecipeName] = useState("");

    const handleInputChange = (event) => {
        setRecipeName({ name: event.target.value });
    };

    const searchRecipe = () => {
        // ToDo: buscar receta por nombre en la API (recipeName.name), y con el id navegar a la pagina
        navigate(`/recipe/` + 1 );
    };

    const navigateToNewRecipe = () => {
        navigate(`/recipe/add`);
    };

    // ToDo: conectar con API back y obtener recetas en una variable. Despues, hacer un recetas.map y pintar la tabla segun el ejemplo

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
                    <tr>
                        <td>1</td>
                        <td>
                            <NavLink to="/recipe/1">
                                <span>Tortilla</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgTortilla} title="Tortilla" alt="Tortilla" />
                        </td>
                        <td>Bla bla bla bla bla bla bla.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <NavLink to="/recipe/2">
                                <span>Croquetas</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgCroquetas} title="Croquetas" alt="Croquetas" />
                        </td>
                        <td>Bla bla bla bla bla bla bla.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <NavLink to="/recipe/3">
                                <span>Gazpacho</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgGazpacho} title="Gazpacho" alt="Gazpacho" />
                        </td>
                        <td>Bla bla bla bla bla bla bla.</td>
                    </tr>
                </tbody>
            </Table>

            <Form>
                <Form.Group className="mb-3" controlId="home-recipe-form">
                    <Form.Label>Busca recetas propias por nombre o crea una nueva:</Form.Label><br />
                    <div className="input-group">
                        <Form.Control type="text" placeholder="Nombre de la receta" onChange={handleInputChange} />
                        <div className="input-group-append">
                            <ButtonGroup aria-label="home-recipe-form">
                                <Button variant="primary" onClick={searchRecipe}>Búsqueda</Button>
                                <Button variant="success" onClick={navigateToNewRecipe}>Crear receta</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Form.Group>
            </Form>
        </article>
    );
}

export default RecipesList;