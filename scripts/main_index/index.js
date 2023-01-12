let recipes = []

// Get all recipes from recipes.json
async function getDataJson() {
  const response = await fetch ('data/recipes.json')
  recipes = (await response.json()).recipes
  init()
}

// Display cards
function displayData(recipes) {
  const recipeSection = document.getElementById('recipes__cards')
  recipeSection.innerHTML = ''
  for (const recipe of recipes) {
    // Get recipe card from recipes_card.js
    const recipeCard = getRecipeCard(recipe)
    recipeSection.appendChild(recipeCard)
  }
}

// Works all scripts
function init() {

  // Display all recipes
  displayData(recipes)

  // Display filters
  filterIngredients()
  filterAppliances()
  filterUstensils()

  // Handle open/close filters
  isArrowClicked()
  
  // Fill the filters with data from the recipes
  fillFilters(recipes)
}

// Call the function behind
getDataJson()