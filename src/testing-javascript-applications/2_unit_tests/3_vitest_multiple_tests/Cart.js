class Cart {
  constructor() {
    this.items = [];
  }
  addToCart(item) {
    this.items.push(item);
  }
  removeFromCart(item) {
    this.items = this.items.filter((currentItems) => currentItems !== item);
  }
  clearCart() {
    this.items.length = 0;
  }
}

export { Cart };
