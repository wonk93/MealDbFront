import React, { useContext, useEffect, useState } from "react";
import './../css/HomePage.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import userService from "../services/user.service";
import { AuthContext } from "../context/auth.context";

function ProfilePage() {
    const [foundUser, setFoundUser] = useState(null);
  const [tempUser, setTempUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(false);
  const {user} = useContext(AuthContext);

  function delayFunction() {
    setLoading(false);
  };
  useEffect(() => {
    // ToDo: uncomment to fetch data from API. Check url and check if everything goes ok
    //Dentro del useffect llamar a la apu user.service
    userService.getCurrentUser()
      .then(({data}) => {
        console.log(data);
        setFoundUser(data);
        setTempUser(data);
        setLoading(false);
      });
    setTimeout(delayFunction, 3000);
  }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/profile', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: 'Bearer ' + localStorage.getItem('authToken'),
  //         },
  //       });

  //       if (response.status === 200) {
  //         setFoundUser(response.data); 
  //         setTempUser(response.data);
  //         setLoading(false);
  //       } else {
  //         throw new Error('Ha habido un error al obtener los datos del perfil.');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);



  //cambiar 

  // function updateProfile(e) {
  //   e.preventDefault();
  //   const url = '/profile';
  //   axios(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('authToken'),
  //     },
  //     body: JSON.stringify(tempUser),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Ha habido un error, intentalo más tarde.');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setFoundUser(data.profile);
  //       setChanged(false);
  //     });
  // }

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
              </Row>
            }
          </Form.Group>
        </Form>
      </article>
  );
}

export default ProfilePage;
