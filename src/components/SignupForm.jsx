import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { Link } from "react-router-dom";
import { Form, InputGroup } from 'react-bootstrap'
// import uploadService from '../../services/upload.service'

const SignupForm = () => {

  const [signupForm, setSignupForm] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const { userName, password, email } = signupForm;

  const navigate = useNavigate();

  const handleInputChange = e => {
    const { value, name } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };



  const handleSubmit = e => {
    e.preventDefault()

    authService
        .signup(signupForm)
        .then(() => {
            navigate('/')
        })
        .catch(err => console.log(err))
}

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   authService
  //     .signup(setSignupForm)
  //     .then(({ data }) => navigate("/login"))
  //     .catch(err => console.log(err));
  // };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Username</div>
        <input
          type="text"
          value={userName}
          onChange={handleInputChange}
          name="userName">
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