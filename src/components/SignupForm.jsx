import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { Link } from "react-router-dom";
import { Axios } from "axios";

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleInputChange = e => {
    const { value, name } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    authService
      .signup(signupData)
      .then(({ data }) => navigate("/login"))
      .catch(err => console.log(err));
  };

  const { username, password, email } = signupData;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Username</div>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          name="username">
          </input>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password">
          </input>
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          name="email">
          </input>
      </div>

      <div>
        <button colorScheme="teal" variant="solid" type="submit">
          Create user
        </button>
        <Link to={"/login"}>
        <button>Login</button>
      </Link>
      </div>
    </form>
  );
};

export default SignupForm;