import { test, expect } from "vitest";
import { Cart } from "./Cart.js";

test("The addToCart function can add an item to the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");

  expect(cart.items).toStrictEqual(["cheesecake"]);
});

test("The removeFromCart function can remove an item from the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");
  cart.addToCart("macaron");
  cart.removeFromCart("cheesecake");

  expect(cart.items).toStrictEqual(["macaron"]);
});

test("The clearCart function can clear all items from the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");
  cart.addToCart("macaron");
  cart.clearCart();

  expect(cart.items).toStrictEqual([]);
});
