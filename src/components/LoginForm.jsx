import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
      email: "",
      password: ""
    });

    const navigate = useNavigate();

  const { authenticate, storeToken, error } = useContext(AuthContext);

  const handleInputChange = e => {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    authService
      .login(loginData)
      .then(({ data }) => {
        console.log(data);
        storeToken(data.authToken);
        authenticate();
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  const { password, email } = loginData;

  return (
    <form onSubmit={handleSubmit}>
      
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          name="email">
          </input>
    

      <div>
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password">
          </input>
      </div>

      <div>
        <button variant="solid" type="submit">
          Login
        </button>
        <Link to="/signup">Signup</Link>
      </div>
      <p>{error}</p>
    </form>
  );
};

export default LoginForm;