export default function searchRecipes() {
    const searchQuery = document.getElementById('searchInput').value;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.meals))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(recipes) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (!recipes) {
        resultsContainer.innerHTML = '<p>No se encontraron recetas.</p>';
        return;
    }

    const recipeList = document.createElement('ul');
    recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.strMeal;
        recipeList.appendChild(listItem);
    });

    resultsContainer.appendChild(recipeList);
}