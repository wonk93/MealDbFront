// import axios from "axios";
// import { TOKEN_NAME } from "../context/auth.context";
// import apiInstace from "./apiInstance";

// class TodoService {
//   constructor() {
//     this.api = apiInstace;
//   }

//   create(data) {
//     return this.api.post("/todos", data);
//   }

//   edit(id, data) {
//     return this.api.put(`/todos/${id}`, data);
//   }

//   delete(id) {
//     return this.api.delete(`/todos/${id}`);
//   }

//   getAll() {
//     return this.api.get(`/todos`);
//   }

//   getOne(id) {
//     return this.api.get(`/todos/${id}`);
//   }
// }

// const todoService = new TodoService();

// export default todoService;



// Este es el modelo de una api interna. Hay que importarlo todo con una api
// externa que en este caso sería mealDB