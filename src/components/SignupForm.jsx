import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

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
      <form>
        <form>Username</form>
        <input>
          type="text"
          value={username}
          onChange={handleInputChange}
          name="username"
          </input>
      </form>

      <form>
        <form>Password</form>
        <input>
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password"
          </input>
      </form>

      <form>
        <form>Email</form>
        <input>
          type="email"
          value={email}
          onChange={handleInputChange}
          name="email"
          </input>
      </form>

      <div>
        <button colorScheme="teal" variant="solid" type="submit">
          Create user
        </button>
        <link to="/login">Login</link>
      </div>
    </form>
  );
};

export default SignupForm;