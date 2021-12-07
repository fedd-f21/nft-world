// Pretend this data was fetched from the database
const products = [
  {
    prodId: 1234,
    name: `Crypto Punk #1234`,
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
    name: `Crypto Punk #345`,
    image: `2.png`,
    price: {
      was: false,
      is: 9.8
    },
    desc: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
    rating: 4.2,
    isAvailable: true,
    isFavourite: false
  }, {
    prodId: 2345,
    name: `Crypto Punk #2345`,
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
    name: `Crypto Punk #3345`,
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
    name: `Crypto Punk #4221`,
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
    name: `Crypto Punk #136`,
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
console.table(products)


// Append a string of HTML the product, to get displayed as an element
const appendProduct = function(product) {

  // if (!product.isAvailable) {
  //   return
  // }

  document.querySelector(`#products`).innerHTML += `
    <article class="product">
      <header>
        <img src="img/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <data value="1.2"><span class="material-icons">diamond</span>ETH <del>${product.price.was}</del> <ins>${product.price.is}</ins></data>
        <p>${product.desc}</p>
        <dl>
          <dt>Rating</dt>
          <dd>${product.rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
        </dl>
        <a href="#">see more</a>
      </header>
      <footer>
        <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span class="material-icons">favorite</span></button>
      </footer>
    </article>
  `
}

// For each of the product Objects, run the callback function once
products.forEach(appendProduct)








