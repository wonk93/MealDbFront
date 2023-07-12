import './../css/HomePage.css';
import RecipesList from '../components/RecipesList';
import IngredientsList from '../components/IngredientsList';
import OnlineRecipes from '../components/OnlineRecipes';

function HomePage() {
    return (
        <div>
            <article>
                <h1>Bienvenido a MealDb!</h1>
                <p>En esta página podrá buscar recetas, ver sus ingredientes y también crear tu propia receta.
                    No te olvides de visitar tu perfil de usuario para hacer cambios o revisar tus recetas.</p>
            </article>
            <RecipesList />
            <IngredientsList />
            <OnlineRecipes />
        </div >
    )
}

export default HomePage;
