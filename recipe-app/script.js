function findRecipes() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const recipeResults = document.getElementById('recipe-results');

    // Check for empty input
    if (searchInput === "") {
        recipeResults.innerHTML = "<p>Please enter ingredients to search.</p>";
        return;
    }
    fetchsearchResults(searchInput, recipeResults);
}

// Fetching API recipe results
function fetchsearchResults(searchInput, recipeResults) {
    const apiKey = "0fb4609873c8427982e7bae64e846c1c";
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(searchInput)}&apiKey=${apiKey}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("No information found.");
        }
        return response.json();
    })
    .then(data => {
        recipeResults.innerHTML = "";
        const recipePromises = data.results.map(recipe => {
            return fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`)
                .then(res => res.json())
                .then(details => {
                    return {
                        id: recipe.id,
                        title: recipe.title,
                        image: recipe.image,
                        usedIngredientsCount: details.extendedIngredients.filter(ing => ing.amount > 0).length
                    };
                });
        });
        return Promise.all(recipePromises);
    })
    .then(recipesWithDetails => {
        recipesWithDetails.forEach(recipe => {
            recipeResults.innerHTML += `
                <div class="recipe-card">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <h3>${recipe.title}</h3>
                    <p>Used Ingredients: ${recipe.usedIngredientsCount}</p>
                    <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
                </div>
            `;
        });
    })
    .catch(error => {
        recipeResults.innerHTML = "<p>Sorry, we couldn't find ingredients for the recipe you entered.</p>";
        console.error(error);
    });
}
