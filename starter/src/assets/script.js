/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
/* Images provided in /images folder. All images from Unsplash.com

   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const products = [];

const products1 = {
  name: "Cherry",
  price: 1,
  quantity: 0,
  productId: 101,
  image: "./images/cherry.jpg",
};
products.push(products1);

const products2 = {
  name: "Orange",
  price: 3,
  quantity: 0,
  productId: 301,
  image: "./images/orange.jpg",
};
products.push(products2);

const products3 = {
  name: "Strawberry",
  price: 2,
  quantity: 0,
  productId: 201,
  image: "./images/strawberry.jpg",
};
products.push(products3);

const products4 = {
  name: "Helmet",
  price: 10,
  quantity: 0,
  productId: 110,
  image: "./images/helmet.jpg",
};
products.push(products4);

const products5 = {
  name: "Shoes",
  price: 20,
  quantity: 0,
  productId: 220,
  image: "./images/shoes.jpg",
};
products.push(products5);

// define what items to find globally?
// does this go here? written like this below?
// const productList = document.getElementById(".products");

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

console.log(products);

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
/* function addProductToCart(productId) {
    if(productId.classList.contains("add-to-cart-button"));
}
/* addProductToCart(productId)  // argument = productId

  // const found ==>  indexOf find search?
  // find item, need to loop/iterate through list
  // if/else/return statements?
  // add item when it matches
  // increase item quantity
  // connect to div class "products" or "products-container" on html?
  // connect to "add-to-cart" class button on js front?
  // event listener on  click?
  // return to stop loop cycle when eveything matches


console.log(productId)(products.name); // adds product to cart div container? Return statement?


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
//function increaseQuantity(productId) {}
// find matching productId
// increase product quantity
// connected to "qup" class button on js front?
// splice?


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
//function decreaseQuantity(productId) {}
// find matching productId
// subtract product quantity
// connected to "qdown" class buttonon js front?
// remove item completely from cart when reaches zero
// splice?
// return last statement end code?


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
//function removeProductFromCart(productId) {}
// find matching productId
// reset quantity to zero
// remove item completely from cart when reaches zero
// connected to "remove" class button in js front?
// splice?
// return last statement end code?


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
//function cartTotal []
// iterate through cart to get total of all products
// math code to return sum of items/products in cart
// connected to somewhere else in the file folders?


/* Create a function called emptyCart that empties the products from the cart */
//function emptyCart 
// empties all prducts from cart
// connected to somewhere else in the file folders?

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
//function pay 
// if/else statement code
// math to return negative # if amount is underpaid
// math to return positive # if amount is overpaid
// connected to somewhere else in the file folders?


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
