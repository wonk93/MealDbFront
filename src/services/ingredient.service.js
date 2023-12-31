import apiInstace from "./apiInstance";

class IngredientService {
  constructor() {
    this.api = apiInstace;
  }

  create(data) {
    return this.api.post("/ingredients", data);
  }
  getAll() {
    return this.api.get(`/ingredients`);
  }

  getOneById(id) {
    return this.api.get(`/ingredients/getOneBy/${id}`);
  }
}

const ingredientService = new IngredientService();

export default ingredientService;
