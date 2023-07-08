import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

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
      
        <form>Email</form>
        <input>
          type="email"
          value={email}
          onChange={handleInputChange}
          name="email"
          </input>
    

      <form>
        <form>Contraseña</form>
        <input>
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password"
          </input>
      </form>

      <div>
        <button variant="solid" type="submit">
          Login
        </button>
        <link to="/signup">Signup</link>
      </div>
      <p>{error}</p>
    </form>
  );
};

export default LoginForm;