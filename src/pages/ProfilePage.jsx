import React, { useContext, useEffect, useState } from "react";
import "./../css/HomePage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import userService from "../services/user.service";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import recipeService from "../services/recipe.service";
import { upload } from "@testing-library/user-event/dist/upload";
import uploadService from "../services/upload.service";

function ProfilePage() {
  const [foundUser, setFoundUser] = useState(null);
  const [tempUser, setTempUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(false);
  const { user } = useContext(AuthContext);
  const [userRecipes, setUserRecipes] = useState([]);
  const navigate = useNavigate();
  const [loadingImage, setLoadingImage] = useState(false);

  const navigateToNewRecipe = () => {
    navigate(`/recipe/add`);
  };

  function delayFunction() {
    setLoading(false);
  }
  useEffect(() => {
    userService.getCurrentUser().then(({ data }) => {
      setFoundUser(data);
      setTempUser(data);
      setLoading(false);

      recipeService.getAllByAuthor(data.userName).then(({ data }) => {
        setUserRecipes(data);
        setLoading(false);
      });
    });
  }, []);

  const uploadProfileImage = (e) => {
    setLoadingImage(true);
    const uploadData = new FormData();
    uploadData.append("imageURL", e.target.files[0]);
    uploadService.uploadImage(uploadData).then(({ data }) => {
      setLoadingImage(false);
      setTempUser({ ...tempUser, imageURL: data.cloudinary_url });
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    userService.editProfileUser(tempUser).then(({ data }) => {
      console.log(data);
      setTempUser({ ...tempUser, data });
    });
  };

  return loading ? (
    <article>
      <h1>Cargando datos...</h1>
    </article>
  ) : (
    <article>
      <h1>Bienvenido, {foundUser.userName}!</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalUserName"
        >
          <Form.Label column sm={2}>
            Nombre usuario
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="UserName"
              value={tempUser.userName}
              disabled
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={tempUser.email}
              disabled
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalProfilePicture"
        >
          <Form.Label column sm={2}>
            Imagen de perfil
          </Form.Label>
          <Col sm={10}>
            <Row>
              <Image src={tempUser.imageURL} fluid className="profile-image" />
            </Row>
            <Row className="profile-image-text-container">
              <Form.Control
                type="file"
                name="imageURL"
                placeholder="Profile Image"
                onChange={uploadProfileImage}
              />
            </Row>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          {changed ? (
            <Row>
              <Col sm={{ span: 2, offset: 2 }}>
                <Button
                  variant="warning"
                  onClick={(e) => {
                    setTempUser({ ...foundUser });
                    setChanged(false);
                  }}
                >
                  Deshacer cambios
                </Button>
              </Col>
              <Col sm={{ span: 2 }}>
                <Button type="submit">Modificar datos</Button>
              </Col>
              <Col sm={{ span: 2 }}>
                <Button variant="success" onClick={navigateToNewRecipe}>
                  Crear receta
                </Button>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col sm={{ span: 2, offset: 2 }}>
                <Button
                  variant="warning"
                  disabled
                  onClick={(e) => {
                    setTempUser({ ...foundUser });
                    setChanged(false);
                  }}
                >
                  Deshacer cambios
                </Button>
              </Col>
              <Col sm={{ span: 2 }}>
                <Button type="submit">Modificar datos</Button>
              </Col>
              <Col sm={{ span: 2 }}>
                <Button variant="success" onClick={navigateToNewRecipe}>
                  Crear receta
                </Button>
              </Col>
            </Row>
          )}
        </Form.Group>
      </Form>
      <h1>Bienvenido, {foundUser.userName}!</h1>

      <h2>Tus recetas:</h2>

      {userRecipes.length > 0 ? (
        <ul>
          {userRecipes.map((recipe) => (
            <li key={recipe._id}>
              <Link to={`/recipe/${recipe._id}`}>{recipe.title}</Link>
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
