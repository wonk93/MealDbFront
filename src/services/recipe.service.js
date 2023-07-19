// import axios from "axios";
// import { TOKEN_NAME } from "../context/auth.context";
import apiInstace from "./apiInstance";

class RecipeService {
  constructor() {
    this.api = apiInstace;
  }

  create(data) {
    return this.api.post("/recipe", data);
  }

//   edit(id, data) {
//     return this.api.put(`/recipe/${id}`, data);
//   }

//   delete(id) {
//     return this.api.delete(`/recipe/${id}`);
//   }

//   getAll() {
//     return this.api.get(`/recipe`);
//   }

//   getOne(id) {
//     return this.api.get(`/recipe/${id}`);
//   }
}

const recipeService = new RecipeService();

export default recipeService;



// Este es el modelo de una api interna. Hay que importarlo todo con una api
// externa que en este caso sería mealDB