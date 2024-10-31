export let Items = [];
export class Item {
  constructor(name, price) {
    this.id = Items.length + 1;
    this.name = name;
    this.price = price;
    Items.push(this);
  }
}
new Item('Mouse', 500);
new Item('Notebook', 1500);
new Item('Keyboard', 100);
new Item('Tablet', 800);
