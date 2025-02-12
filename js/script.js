// Pretend this data was fetched from the database
const products = [
  {
    prodId: 1234,
    name: `#1234 (Sally)`,
    image: `1.png`,
    price: {
      was: 11.2,
      is: 9.9
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.4,
    isAvailable: true,
    isFavourite: false,
  }, {
    prodId: 345,
    name: `#345 (Sandy)`,
    image: `2.png`,
    price: {
      was: false,
      is: 9.8
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.2,
    isAvailable: false,
    isFavourite: false
  }, {
    prodId: 2345,
    name: `#2345 (Peter)`,
    image: `3.png`,
    price: {
      was: false,
      is: 8.5
    },
    desc: `Blah blah blah, I love this!!`,
    rating: 4.6,
    isAvailable: true,
    isFavourite: true
  }, {
    prodId: 3345,
    name: `#3345 (Allen)`,
    image: `4.png`,
    price: {
      was: 12,
      is: 7.99
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.2,
    isAvailable: true,
    isFavourite: false
  }, {
    prodId: 4221,
    name: `#4221 (Grace)`,
    image: `5.png`,
    price: {
      was: 9,
      is: 7.25
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 3.9,
    isAvailable: true,
    isFavourite: false
  }, {
    prodId: 136,
    name: `#136 (Ada)`,
    image: `6.png`,
    price: {
      was: false,
      is: 6.2
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 3.9,
    isAvailable: true,
    isFavourite: false
  }
]

// Append a string of HTML the product, to get displayed as an element
const appendProduct = function(product) {

  document.querySelector(`#products`).innerHTML += `
    <article class="product ${(!product.isAvailable) ? `unavailable` : ``}">
      <header>
        <img src="img/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <data value="1.2"><span class="material-icons">diamond</span>ETH ${
          (product.price.was) 
            ? `<del>${product.price.was}</del> <ins>${product.price.is}</ins>` 
            : `<span>${product.price.is}</span>`
        }</data>
        <p>${product.desc}</p>
        <dl>
          <dt>Rating</dt>
          <dd>${product.rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
        </dl>
        <a href="#">see more</a>
      </header>
      <footer>
        <button type="button" class="add-to-cart" data-prodid="${product.prodId}"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span class="material-icons">favorite</span></button>
      </footer>
    </article>
  `
}



// Filter by product
const filterByProduct = function() {
  // Collect the form filter values
  const maxPrice = document.querySelector(`#maxPrice`).value || 99999
  const prodName = document.querySelector(`#searchName`).value


  // Prevent the products from accumulating
  document.querySelector(`#products`).innerHTML = ``

  // For each of the product Objects, run the callback function once
  products
    .filter(product => product.price.is <= maxPrice)
    .filter(product => product.name.toUpperCase().includes(prodName.toUpperCase()))
    .forEach(appendProduct)
}


// Add to cart functionality (making dynamic content functional)
document.querySelector(`#products`).addEventListener(`click`, function(event) {
  // If we click something inside of the button (an icon, perhaps), still make the button the target
  const theTarget = event.target.closest(`button`)

  // if the event.target (what was clicked) is an `.add-to-cart` button...
  if (theTarget && thetheTargetBtn.matches(`.add-to-cart`)) {
    console.log(`Add item ${theTarget.dataset.prodid} to cart!`)
  }
})


// Detect the `submit` event
document.querySelector(`#filterProducts`).addEventListener(`submit`, function(event) {
  // Prevent the browser from redirecting
  event.preventDefault()

  filterByProduct()
})

// Detect changes to the number stepper
document.querySelector(`#maxPrice`).addEventListener(`change`, function(event) {
  filterByProduct()
})

// Detect any input to the search field
document.querySelector(`#searchName`).addEventListener(`input`, function(event) {
  filterByProduct()
})

// Show the products before filtering (when the document loads)
window.addEventListener(`load`, function(event) {
  filterByProduct()
})





/*
// Today:
- Form submit and values
- data-*=""
- Event delegation
- Media events

// Then:
- Modules
- fetch
- async/await
- JSON
- map() vs forEach()
- Sort
- Pagination
*/



