import axios from "axios";

class UserService {
  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/profile`,
    });

    this.axios.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  getOneUserById(id) {
    return this.axios.get(`/getUserById/${id}`);
  }

  getCurrentUser() {
    return this.axios.get(`/`);
  }

  getOneUser(username) {
    return this.axios.get(`/getUser/${username}`);
  }

  editProfileUser(info) {
    return this.axios.put(`/edit-profile`, info);
  }

  getAllUsers() {
    return this.axios.get("/");
  }
}

const userService = new UserService();

export default userService;
