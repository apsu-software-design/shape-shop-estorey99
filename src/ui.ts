//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product} from './products';
import { Cart } from './cart';
import { PriceView, CartView, RemoveView } from './cartView';
// Hey look. It's a global variable. This is totally cool, right?


/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    let cart: Cart = new Cart();
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(cart); break;
      case '2': removeItemFromCart(cart); break;
      case '3': viewItemsInCart(cart); break;
      case '4': viewCartTotal(cart); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function addItemToCart(cart:Cart) {
    let temp = letUserSelectItem();
    if(temp!=undefined)
    cart.addToCart(temp,letUserSelectQuantity());
}

function letUserSelectItem():Product|undefined {
  
    let newShape: Product;
    let response: string="0";
    while (response != "1" && response != "2" && response != "3" && response != "4")
    {
        console.log(`Here you can select your shape. Pick an option:
        1. Buy a Triangle!
        2. Buy a Square!
        3. Buy a Pentagon!
        4. Go back. Don't buy anything.`);

        response = readlineSync.question('> ');
        switch (response) { //handle each response
            case '1': return newShape = new Product("Triangle", 3.5, "It's got three sides!"); 
            case '2': return newShape = new Product("Square", 4.5, "It's got four sides!"); 
            case '3': return newShape = new Product("Pentagon", 5.5, "It's got five sides!");
            case '4': break;
            default: console.log('Invalid option!');
        }
    }
    console.log(''); //extra empty line for revisiting
    return undefined;
}

function letUserSelectQuantity():number {
    console.log(`How many of this shape would you like to purchase?
  `);

    let response = readlineSync.question('> ')
    let newQuantity:number=(parseInt(response));
    console.log(''); //extra empty line for revisiting
    return newQuantity;
}

function removeItemFromCart(cart:Cart) {
  let  view:RemoveView = new RemoveView(cart);
    console.log(view.getView());

    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);
    cart.removeFromCart(toRemove);

    console.log(''); //extra empty line for revisiting
}

function viewItemsInCart(cart:Cart) {
    let view: CartView = new CartView(cart);
    console.log(view.getView());
}

function viewCartTotal(cart:Cart) {
    let view:PriceView=new PriceView(cart);
    console.log(view.getView()); 
}
