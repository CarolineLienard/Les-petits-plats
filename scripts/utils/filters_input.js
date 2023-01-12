// Search function in inputs

// Ingredients
function getSearchIngredients() {

  const filterRender = document.querySelectorAll('.filter__ingredients--list li')
  const cards = document.querySelectorAll('.filter__ingredients--items')
  const searchQuery = document.getElementById('ingredients-input').value

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden')
    } else {
      card.classList.add('is-hidden')
    }
  })
  return (filterRender)
}

// In filters_recipes.js
function inputIngredient() {
  const searchInputIngredient = document.getElementById('ingredients-input')
  searchInputIngredient.addEventListener('keyup', () => {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(getSearchIngredients, typeInterval)
  })
}

// Appliances
function getSearchAppliances() {
  const filterRender = document.querySelectorAll('.filter__appliances--list li')
  const cards = document.querySelectorAll('.filter__appliances--items')
  const searchQuery = document.getElementById('appliances-input').value

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden')
    } else {
      card.classList.add('is-hidden')
    }
  })
  return (filterRender)
}

// in filters_recipes.js
function inputAppliance() {
  const searchInputAppliance = document.getElementById('appliances-input')
  searchInputAppliance.addEventListener('keyup', () => {
    clearTimeout(typingTimer)
  typingTimer = setTimeout(getSearchAppliances, typeInterval)
  })
}

// Ustensils
function getSearchUstensils() {
  const filterRender = document.querySelectorAll('.filter__ustensils--list li')
  const cards = document.querySelectorAll('.filter__ustensils--items')
  const searchQuery = document.getElementById('ustensils-input').value

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden')
    } else {
      card.classList.add('is-hidden')
    }
  })
  return (filterRender)
}

// in filters_recipes.js
function inputUstensil() {
  const searchInputUstensil = document.getElementById('ustensils-input')
  searchInputUstensil.addEventListener('keyup', () => {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(getSearchUstensils, typeInterval)
  })
}