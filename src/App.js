import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/ApartmentsPage";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";
import IngredientPage from "./pages/IngredientPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/recipe/add" element={<AddRecipePage />} />
        <Route path="/ingredient" element={<IngredientPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
