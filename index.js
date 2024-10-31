import { Item } from './services/item.js';
import * as UserServices from './services/user.js';

// Criando o usuário já com o carrinho
const user = new UserServices.User(1, 'Pedro');

// Criando um novo produto para demonstração
const newMonitor = new Item('Monitor', 3000);

// Exemplo de adicionar um item como objeto ao carrinho
user.cart.addItem(newMonitor);

// Exemplo de adicionar um item pelo nome do item ao carrinho
user.cart.addItemByName('Mouse');
user.cart.addItemByName('Mouse');

// Exemplo de remover um item pelo ID do item do carrinho
user.cart.addItemById(3);
user.cart.addItemById(3);

// Exemplo de remover um item pelo nome do item do carrinho
user.cart.removeItemByName('Mouse');

// Exemplo de remover um item pelo objeto do item do carrinho
user.cart.removeItem(newMonitor);

// Mostrar todos os itens no carrinho do usuário
user.cart.showCartItems();
