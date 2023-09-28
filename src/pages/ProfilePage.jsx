import React, { useContext, useEffect, useState } from "react";
import './../css/HomePage.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import userService from "../services/user.service";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import recipeService from "../services/recipe.service";

// const [userRecipes, setUserRecipes] = useState([]);


function ProfilePage() {
    const [foundUser, setFoundUser] = useState(null);
  const [tempUser, setTempUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(false);
  const {user} = useContext(AuthContext);
  const [userRecipes, setUserRecipes] = useState([]);
  const navigate = useNavigate();

  const navigateToNewRecipe = () => {
    navigate(`/recipe/add`);
};

  

  function delayFunction() {
    setLoading(false);
  };
  useEffect(() => {
    userService.getCurrentUser()
      .then(({data}) => {
        setFoundUser(data);
        setTempUser(data);
        setLoading(false);
      });
    //   recipeService.getUserRecipes(user.id)  // Asumo que hay una propiedad `id` en el objeto `user`
    // .then(response => {
    //   setUserRecipes(response.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
    // setTimeout(delayFunction, 3000);
  }, []);

  return (
    loading ? (
      <article>
        <h1>Cargando datos...</h1>
      </article>
    ) :
      <article>
        <h1>Bienvenido, {foundUser.userName}!</h1>

        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalUserName">
            <Form.Label column sm={2}>
              Nombre usuario
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="UserName" value={tempUser.userName} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" value={tempUser.email} disabled />
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalNickName">
            <Form.Label column sm={2}>
              Nick
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Nick" value={tempUser.nickName}
                onChange={(e) => {
                  setChanged(true);
                  setTempUser({
                    ...tempUser,
                    nickName: e.target.value,
                  });
                }} />
            </Col>
          </Form.Group> */}

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalProfilePicture">
            <Form.Label column sm={2}>
              Imagen de perfil
            </Form.Label>
            <Col sm={10}>
              <Row>
                <Image src={tempUser.profilePicture} fluid className="profile-image" />
              </Row>
              <Row className="profile-image-text-container">
                <Form.Control type="text" placeholder="Profile Image"
                  value={tempUser.profilePicture}
                  onChange={(e) => {
                    setChanged(true);
                    setTempUser({
                      ...tempUser,
                      profilePicture: e.target.value,
                    });
                  }} />
              </Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            {changed ? (
              <Row>
                <Col sm={{ span: 2, offset: 2 }}>
                  <Button variant="warning" onClick={(e) => {
                    setTempUser({ ...foundUser });
                    setChanged(false);
                  }}>
                    Deshacer cambios
                  </Button>
                </Col>
                <Col sm={{ span: 2 }}>
                  <Button type="submit">Modificar datos</Button>
                </Col>
                <Col sm={{ span: 2 }}>
                <Button variant="success" onClick={navigateToNewRecipe}>Crear receta</Button>
                </Col>
              </Row>
            ) :
              <Row>
                <Col sm={{ span: 2, offset: 2 }}>
                  <Button variant="warning" disabled onClick={(e) => {
                    setTempUser({ ...foundUser });
                    setChanged(false);
                  }}>
                    Deshacer cambios
                  </Button>
                </Col>
                <Col sm={{ span: 2 }}>
                  <Button type="submit" disabled>Modificar datos</Button>
                </Col>
                <Col sm={{ span: 2 }}>
                <Button variant="success" onClick={navigateToNewRecipe}>Crear receta</Button>
                </Col>                 
              </Row>
            }
          </Form.Group>
        </Form>
        <h1>Bienvenido, {foundUser.userName}!</h1>
  {/* ... Tu código actual ... */}

  <h2>Tus recetas:</h2>
  {userRecipes.length > 0 ? (
    <ul>
      {userRecipes.map(recipe => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No has creado recetas todavía.</p>
  )}
      </article>
      
  );
}

export default ProfilePage;
