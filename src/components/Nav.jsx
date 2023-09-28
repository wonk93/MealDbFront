import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import React, { useContext } from "react";
// import { BiSolidUser } from "react-icons/fa";
import ImgLogo from './../img/logo.png';
import ImgLogout from './../img/logout.png';
import ImgProfile from './../img/profile.png';
import './../css/NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
export const TOKEN_NAME = "authToken";

function NavBar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = (event) => {
    if (user) {
      setUser(null);
      localStorage.removeItem(TOKEN_NAME);
      navigate(`/`);
    };
  };

  return (
    <nav>
      <Container fluid>
        <Row>
          <Col>
            <NavLink to="/">
              <img src={ImgLogo} title="Inicio" alt="MealDb logo" />
              <span> MealDb</span>
            </NavLink>
          </Col>
          <Col sm="auto" className="navbar-right">
            <NavLink to="/profile">
              <img src={ImgProfile} title="Perfil usuario" alt="Perfil usuario" />
              <span> Perfil usuario</span>
            </NavLink>
          </Col>
          <Col sm="1" className="navbar-right logout">
            <img src={ImgLogout} title="Cerrar sesión" alt="Cerrar sesión" onClick={logout} />
          </Col>
        </Row>
      </Container >
    </nav>
  );
}

export default NavBar;
