import axios from "axios";
import { TOKEN_NAME } from "../context/auth.context";
console.log(process.env.REACT_APP_API_URL);
const apiInstace = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}` 
});

apiInstace.interceptors.request.use(config => {
  const token = localStorage.getItem(TOKEN_NAME);
  console.log(token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiInstace;
