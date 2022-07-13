///Exporting module
console.log('Exporting module');

//blockingc code
// console.log('Start fetching modules');

// await fetch('https://jsonplaceholder.typicode.com/users');

// console.log('Finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
// export { shippingCost };

const totalPrice = 237;
const totalQuantity = 19;
export { totalPrice, totalQuantity as tq };
