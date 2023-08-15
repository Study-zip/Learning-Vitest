const Cart = require("./Cart.js");

const cart = new Cart();
cart.addToCart("cheesecake");

const hasOneItem = cart.items.length === 1;
const hasACheesecake = cart.items[0] === "cheesecake";

if (hasOneItem && hasACheesecake) {
  console.log("The addToCart function can add an item to the cart");
} else {
  const actualContent = cart.items.join(", ");

  console.error("The addToCart function didn't do what we expect!");
  console.error(`Here is the actual content of the cart: ${actualContent}`);

  throw new Error("Test failed!");
}

/**
 * 1. Node.js 환경에서는 CommonJS 모듈 시스템 사용을 위해 require 사용
 * 2. package.json에서 "type": "module"을 "type": "commonjs"로 변경 (Vitest 환경)
 */
