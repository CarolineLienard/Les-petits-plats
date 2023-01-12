// Fill filters with datas from recipeToDisplay
function fillFilters(recipes) {
  const ingredientsBloc = document.querySelector('.filter__ingredients--list')
  const appliancesBloc = document.querySelector('.filter__appliances--list')
  const ustensilsBloc = document.querySelector('.filter__ustensils--list')

  const ingredientsList = []
  const appliancesList = []
  const ustensilsList = []

  // Empty list before sorting 
  ingredientsBloc.innerHTML = ''
  appliancesBloc.innerHTML = ''
  ustensilsBloc.innerHTML = ''

  // Ingredients
  recipes.forEach((recipe) => {
    // if tags already used, don't push it.
    const itags = [...document.querySelectorAll('.tag__ingredient')].map( (itag) => itag.innerText)
    recipe.ingredients.forEach(({ ingredient }) => {
      if (ingredientsList.includes(ingredient) === false && itags.includes(ingredient) === false) {
        ingredientsList.push(ingredient)
        const filterItem = document.createElement('li')
        filterItem.classList.add('filter__ingredients--items')
        filterItem.innerText = ingredient
        ingredientsBloc.appendChild(filterItem)
      }
    })
    
    // Appliances
    const atags = [...document.querySelectorAll('.tag__appliance')].map( (atag) => atag.innerText)
      if (appliancesList.includes(recipe.appliance) === false && atags.includes(recipe.appliance) === false) {
        appliancesList.push(recipe.appliance)
        const filterItem = document.createElement('li')
        filterItem.classList.add('filter__appliances--items')
        filterItem.innerText = recipe.appliance
        appliancesBloc.appendChild(filterItem)
      }

    // Ustensils
    const utags = [...document.querySelectorAll('.tag__ustensil')].map( (utag) => utag.innerText)
    recipe.ustensils.forEach((ustensil) => {
      if (ustensilsList.includes(ustensil) === false && utags.includes(ustensil) === false) {
        ustensilsList.push(ustensil)
        const filterItem = document.createElement('li')
        filterItem.classList.add('filter__ustensils--items')
        filterItem.innerText = ustensil
        ustensilsBloc.appendChild(filterItem)
      } 
    })
  })

  // In tags.js
  tagIngredientAlreadyAdded = false
  addTagFilterIngredients()
  
  tagApplianceAlreadyAdded = false
  addTagFilterAppliances()

  tagUstensilAlreadyAdded = false
  addTagFilterUstensils();
}

// Handle open filter
function isArrowClicked() {

  const arrowDownIngredient = document.querySelector('.filter__ingredients--angleDown')
  const arrowDownAppliance = document.querySelector('.filter__appliances--angleDown')
  const arrowDownUstensil = document.querySelector('.filter__ustensils--angleDown')

  let ingredientCloseElt
  let ingredientArrowUp
  let applianceCloseElt
  let applianceArrowUp
  let ustensilCloseElt
  let ustensilArrowUp
  
  // Ingredients
  arrowDownIngredient.addEventListener('click', () => {
    applianceCloseElt = document.querySelector('.filter__appliances--view')
    applianceArrowUp = document.querySelector('.filter__appliances--angleUp .fa-angle-up')
    ustensilCloseElt = document.querySelector('.filter__ustensils--view')
    ustensilArrowUp = document.querySelector('.filter__ustensils--angleUp .fa-angle-up')
    if (applianceCloseElt != null) {
      applianceArrowUp.click()
    }
    if (ustensilCloseElt != null) {
      ustensilArrowUp.click()
    }
  })

  // Appliances 
  arrowDownAppliance.addEventListener('click', () => {
    ustensilCloseElt = document.querySelector('.filter__ustensils--view')
    ustensilArrowUp = document.querySelector('.filter__ustensils--angleUp .fa-angle-up')
    ingredientCloseElt = document.querySelector('.filter__ingredients--view')
    ingredientArrowUp = document.querySelector('.filter__ingredients--angleUp .fa-angle-up')
    if (ustensilCloseElt != null) {
      ustensilArrowUp.click()
    }
    if (ingredientCloseElt != null) {
      ingredientArrowUp.click()
    }
  })

  // Ustensils
  arrowDownUstensil.addEventListener('click', () => {
    ingredientCloseElt = document.querySelector('.filter__ingredients--view')
    ingredientArrowUp = document.querySelector('.filter__ingredients--angleUp .fa-angle-up')
    applianceCloseElt = document.querySelector('.filter__appliances--view')
    applianceArrowUp = document.querySelector('.filter__appliances--angleUp .fa-angle-up')
    if (ingredientCloseElt != null) {
      ingredientArrowUp.click()
      }
    if (applianceCloseElt != null) {
      applianceArrowUp.click()
    }  
  })
}