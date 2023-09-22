import React, { useEffect, useState } from "react";
import './../css/HomePage.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function ProfilePage() {
  const sampleDataFromApiRequest = { userName: "test", email: "test@test.com", nickName: "dani", profilePicture: "https://images.ecestaticos.com/JjMiY54z4BKuT8mzuqiONTlNBt4=/0x109:2119x1301/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb02%2F4cc%2F30d%2Fb024cc30d62f4897628336118f716af1.jpg" };
  const [user, setUser] = useState();
  const [tempUser, setTempUser] = useState();
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(false);

  function delayFunction() {
    setLoading(false);
  };

  useEffect(() => {
    // ToDo: uncomment to fetch data from API. Check url and check if everything goes ok
    const url = '/profile';
    axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ha habido un error, intentalo más tarde.');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setTempUser(data);
        // ToDo: si lo siguiente da problemas en la web del tipo: userName undefined, utilizar "setTimeout(delayFunction, 3000);" en su lugar
        setLoading(false);
      });

    setUser(sampleDataFromApiRequest);
    setTempUser(sampleDataFromApiRequest);
    setTimeout(delayFunction, 3000);
  }, []);

  function updateProfile(e) {
    e.preventDefault();
    const url = '/profile';
    axios(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(tempUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ha habido un error, intentalo más tarde.');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.profile);
        setChanged(false);
      });
  }

  return (
    loading ? (
      <article>
        <h1>Cargando datos...</h1>
      </article>
    ) :
      <article>
        <h1>Bienvenido, {user.userName}!</h1>

        <Form onSubmit={updateProfile}>
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

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalNickName">
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
          </Form.Group>

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
                    setTempUser({ ...user });
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
                    setTempUser({ ...user });
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
