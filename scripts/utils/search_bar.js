// Main search function
const searchBarInput = document.querySelector('.search__input')
const noResultText = document.querySelector('.no-result-message')

function searchLive() {
  let tagsUsed = false
  recipesToDisplay = []
  let mainInput

  // return 'recipeToDisplay'
  if (searchBarInput.value.length > 2) {
    mainInput = searchBarInput.value

    const regex = new RegExp(`${mainInput.trim().toLowerCase()}`)
    recipesToDisplay = recipes.filter((recipe) => {
      let recipeIsMatching = false
      if (regex.test(recipe.name)) {
        recipeIsMatching = true
      } else if (regex.test(recipe.description)) {
        recipeIsMatching = true
      }
      recipe.ingredients.forEach(({ ingredient }) => {
        if (regex.test(ingredient)) {
          recipeIsMatching = true
        }
      })
      return recipeIsMatching
    })

    // Fill filters with the data from recipesToDisplay
    fillFilters(recipesToDisplay)
  }
  
  // If tags used 
  if (Array.from(document.querySelectorAll('.tag__ingredients--wrapper .tag__ingredient .tag-blue')).length > 0
  || Array.from(document.querySelectorAll('.tag__appliances--wrapper .tag__appliance .tag-green')).length > 0
  || Array.from(document.querySelectorAll('.tag__ustensils--wrapper .tag__ustensil .tag-red')).length > 0) {
    tagsUsed = true
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay)
    } else {
    recipesToDisplay = filteredRecipesWithTags(recipes)
    }
  }

  // Search error
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = '';
    displayData(recipesToDisplay)
  } else {
    displayData(recipesToDisplay)
     noResultText.innerHTML = '<p>Aucune recette ne correspond à vos critères</p>'
  } 

  // If search input empty
  if (((searchBarInput.value === '') || (searchBarInput.value.length < 3)) && tagsUsed === false) {
    fillFilters(recipes)
    displayData(recipes)
    noResultText.innerHTML = ''
  }
}

// Set timeout
let typingTimer
const typeInterval = 100;
searchBarInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer)
  typingTimer = setTimeout(searchLive(), typeInterval)
})