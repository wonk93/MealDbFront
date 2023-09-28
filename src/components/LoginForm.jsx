import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [loginform, setLoginform] = useState({
      email: "",
      password: ""
    });

    const navigate = useNavigate();

  const { authenticate, storeToken, error } = useContext(AuthContext);

  const handleInputChange = e => {
    const { value, name } = e.target;
    setLoginform({ ...loginform, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    authService
    .login(loginform)
    .then(({ data }) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.user))
      storeToken(data.authToken);
      authenticate();
      navigate("/");
    })
    .catch(err => console.log(err));
};

  const { password, email } = loginform;

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
        <Link to={"/signup"}>
        <button>Signup</button>
      </Link>
      </div>
      <p>{error}</p>
    </form>
  );
};

export default LoginForm;



