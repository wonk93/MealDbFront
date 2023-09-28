import ImgHuevos from './../img/huevos.jpg';
import ImgAceite from './../img/aceite.jpg';
import ImgFresas from './../img/fresas.jpeg';
import ImgLubina from './../img/lubina.jpg';
import ImgTomate from './../img/tomate.jpg';
import ImgSalmon from './../img/salmon.jpg';
import ImgAzucar from './../img/Azucar.jpg';
import ImgSal from './../img/sal.jpg';
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function IngredientsList() {
    const navigate = useNavigate();
    let [ingredientName, setIngredientName] = useState("");

    const handleInputChange = (event) => {
        setIngredientName({ name: event.target.value });
    };


    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('www.themealdb.com/api/json/v1/1/ search');
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //         setLoading(false);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);




    const searchIngredient = () => {
        

        // ToDo: buscar ingrediente por nombre en la API (ingredientName.name), y con el id navegar a la pagina
        navigate(`/ingredient/` + 1 );
    };

    const navigateToNewIngredient = () => {
        navigate(`/ingredient/add`);
    };

    // ToDo: conectar con API back y obtener ingredientes en una variable. Despues, hacer un ingredients.map y pintar la tabla segun el ejemplo
    
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
                    <tr>
                        <td>1</td>
                        <td>
                            <NavLink to="/ingredient/1">
                                <span>Huevos</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgHuevos} title="Huevos" alt="Huevos" />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <NavLink to="/ingredient/2">
                                <span>Aceite</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgAceite} title="Aceite" alt="Aceite" />
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <NavLink to="/ingredient/3">
                                <span>Fresas</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgFresas} title="Fresas" alt="Fresas" />
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <NavLink to="/ingredient/4">
                                <span>Lubina</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgLubina} title="Lubina" alt="Lubina" />
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            <NavLink to="/ingredient/5">
                                <span>Tomate</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgTomate} title="Tomate" alt="Tomate" />
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            <NavLink to="/ingredient/6">
                                <span>Sal</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgSal} title="Sal" alt="Sal" />
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            <NavLink to="/ingredient/7">
                                <span>Salmon</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgSalmon} title="Salmon" alt="Salmon" />
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            <NavLink to="/ingredient/7">
                                <span>Azúcar</span>
                            </NavLink>
                        </td>
                        <td>
                            <img src={ImgAzucar} title="Azúcar" alt="Azúcar" />
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Form>
                <Form.Group className="mb-3" controlId="home-ingredient-form">
                    <Form.Label>Busca ingredientes propios por nombre o crea uno nuevo:</Form.Label><br />
                    <div className="input-group">
                        <Form.Control type="text" placeholder="Nombre del ingrediente"  onChange={handleInputChange} />
                        <div className="input-group-append">
                            <ButtonGroup aria-label="home-ingredient-form">
                                <Button variant="primary" onClick={searchIngredient}>Búsqueda</Button>
                                <Button variant="success" onClick={ navigateToNewIngredient }>Crear ingrediente</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Form.Group>
            </Form>
        </article>
    );
}

export default IngredientsList;
