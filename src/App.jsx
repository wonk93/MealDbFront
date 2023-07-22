import "./App.css";
import './css/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";
import RandomOnlineRecipe from "./pages/RandomOnlineRecipe";
import OnlineRecipeSearch from "./pages/OnlineRecipeSearch";
import IngredientPage from "./pages/IngredientPage";
import AddIngredientPage from "./pages/AddIngredientPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";

import Container from 'react-bootstrap/Container';
import NavBar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className='body'>
        <Container>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/recipe/:id" element={<PrivateRoute><RecipePage /></PrivateRoute>} />
            <Route path="/recipe/add" element={<PrivateRoute><AddRecipePage /></PrivateRoute>} />
            <Route path="/recipe/online/random" element={<PrivateRoute><RandomOnlineRecipe /></PrivateRoute>} />
            <Route path="/recipe/online" element={<PrivateRoute><OnlineRecipeSearch /></PrivateRoute>} />
            <Route path="/ingredient/:id" element={<PrivateRoute><IngredientPage /></PrivateRoute>} />
            <Route path="/ingredient/add" element={<PrivateRoute><AddIngredientPage /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
