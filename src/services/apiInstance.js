import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";

const apiInstace = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}` //cabiar la variable como esta en el back
});

apiInstace.interceptors.request.use(config => {
  const token = localStorage.getItem(TOKEN_NAME);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiInstace;