import { Items } from './item.js';
export class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    return true;
  }

  addItemByName(name) {
    const item = Items.find((item) => item.name === name);
    if (item) {
      this.items.push(item);
      return true;
    } else {
      console.log('Erro! Item não encontrado.');
      return false;
    }
  }

  addItemById(id) {
    const item = Items.find((item) => item.id === id);
    if (item) {
      this.items.push(item);
      return true;
    } else {
      console.log('Erro! Item não encontrado.');
      return false;
    }
  }

  removeItemById(id) {
    const index = this.items.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    } else {
      console.log('Erro! Item não encontrado no carrinho de compras.');
      return false;
    }
  }

  removeItemByName(name) {
    const index = this.items.findIndex((cartItem) => cartItem.name === name);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    } else {
      console.log('Erro! Item não encontrado no carrinho de compras.');
      return false;
    }
  }

  removeItem(item) {
    const index = this.items.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      console.log('Erro! Item não encontrado no carrinho de compras.');
    }
  }

  clearCart() {
    this.items = [];
  }

  getCartTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getCartItemCount() {
    return this.items.length;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  showCartItems() {
    const itemMap = this.items.reduce((map, item) => {
      if (map[item.id]) {
        map[item.id].quantity += 1;
      } else {
        map[item.id] = { ...item, quantity: 1 };
      }
      return map;
    }, {});
    const total = this.getCartTotal();

    console.table(Object.values(itemMap), ['id', 'name', 'price', 'quantity']);
    console.log(`Total: R$ ${total.toFixed(2)}`);
  }
}
