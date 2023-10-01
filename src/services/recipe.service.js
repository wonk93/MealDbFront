import apiInstace from "./apiInstance";

class RecipeService {
  constructor() {
    this.api = apiInstace;
  }

  create(data) {
    return this.api.post("/recipe", data);
  }

  getAll() {
    return this.api.get(`/recipe`);
  }
  getAllByAuthor(author) {
    return this.api.get(`/recipe/${author}`);
  }

  getOneById(id) {
    return this.api.get(`/recipe/getOneBy/${id}`);
  }

  getOneByQuery(recipeQuery) {
    return this.api.post(`/recipe/byName`, recipeQuery);
  }

  deleteRecipe(id) {
    return this.api.delete(`/recipe/deleteRecipe/${id}`);
  }
  editRecipe(id, data) {
    return this.api.put(`/recipe/editRecipe/${id}`, data);
  }
}

const recipeService = new RecipeService();

export default recipeService;
