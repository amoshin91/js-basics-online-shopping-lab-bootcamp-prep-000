var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartAdd = {itemName: item, itemPrice: Math.floor(Math.random() * 100)}
  cart.push(cartAdd);
  return item + ' has been added to your cart.'
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty"
    
  } else if () {
    
  };
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
