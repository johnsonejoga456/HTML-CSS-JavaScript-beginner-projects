function findRecipes() {
    const searchInput = document.getElementById('searchInput').value;
    const recipeResults = document.getElementById('recipe-results');

    if (searchInput === " ") {
        recipeResults.innerHTML = "<p>Please enter ingredients to search.<p>";
        return;
    }
    fetchsearchResults(searchInput, recipeResults);
}

// fetching API recipe results
function fetchsearchResults(recipeResults) {
    const apiKey = `https://api.spoonacular.com/recipes/complexSearch/${encodeURICOmponent(searchInput)}`;

    fetch(apiKey)
    .then(response => {
        if (!response.ok) {
            throw new Error("No information found.");
        }
        return response.json();
    })
    .then(data => {
        recipeResults.innerHTML = "";
        data.forEach(recipe => {
            recipeResults.innerHTML += `
                <div class="recipe-card">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <h3>${recipe.title}</p>
                    <p>Used Ingredients: ${recipe.usedIngredientsCount}</p>
                    <button onclick="view.Recipe(${recipe.id})">View Recipe</button>
                </div>
            `;
        });
    })
    .catch(error => {
        recipeResults.innerHTML = "<p>Sorry, we couldn't find ingredients you for the recipe you entered.</p>"
    })
}