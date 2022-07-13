//Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(shippingCost);
// console.log(price, tq);
// addToCart(20, 'wine');
// console.log(schoppingCart);
// console.log(schoppingCart.totalPrice);

console.log('Import module');

import { addToCart, cart } from './shoppingCart.js';

addToCart('pizza', 23);
addToCart('pizzaaa', 5);
addToCart('ice', 8);

console.log(cart);

//////////////////////////
//Top level await
/* console.log('Start');

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();

console.log(data);

console.log('Finish');
 
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

console.log(lastPost);

// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();

console.log(lastPost2); */

///////////////////////////////////////
// The Module Pattern
/* 
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
 */

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

//////////////////////
//polifiling
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async func

import 'regenerator-runtime';
