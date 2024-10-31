import { Cart } from './cart.js';

export class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.cart = new Cart();
  }
}
