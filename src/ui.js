"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var products_1 = require("./products");
var cart_1 = require("./cart");
var cartView_1 = require("./cartView");
// Hey look. It's a global variable. This is totally cool, right?
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    var cart = new cart_1.Cart();
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart(cart);
                break;
            case '2':
                removeItemFromCart(cart);
                break;
            case '3':
                viewItemsInCart(cart);
                break;
            case '4':
                viewCartTotal(cart);
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function addItemToCart(cart) {
    var temp = letUserSelectItem();
    if (temp != undefined)
        cart.addToCart(temp, letUserSelectQuantity());
}
function letUserSelectItem() {
    var newShape;
    var response = "0";
    while (response != "1" && response != "2" && response != "3" && response != "4") {
        console.log("Here you can select your shape. Pick an option:\n        1. Buy a Triangle!\n        2. Buy a Square!\n        3. Buy a Pentagon!\n        4. Go back. Don't buy anything.");
        response = readlineSync.question('> ');
        switch (response) { //handle each response
            case '1': return newShape = new products_1.Product("Triangle", 3.5, "It's got three sides!");
            case '2': return newShape = new products_1.Product("Square", 4.5, "It's got four sides!");
            case '3': return newShape = new products_1.Product("Pentagon", 5.5, "It's got five sides!");
            case '4': break;
            default: console.log('Invalid option!');
        }
    }
    console.log(''); //extra empty line for revisiting
    return undefined;
}
function letUserSelectQuantity() {
    console.log("How many of this shape would you like to purchase?\n  ");
    var response = readlineSync.question('> ');
    var newQuantity = (parseInt(response));
    console.log(''); //extra empty line for revisiting
    return newQuantity;
}
function removeItemFromCart(cart) {
    var view = new cartView_1.RemoveView(cart);
    console.log(view.getView());
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    cart.removeFromCart(toRemove);
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart(cart) {
    var view = new cartView_1.CartView(cart);
    console.log(view.getView());
}
function viewCartTotal(cart) {
    var view = new cartView_1.PriceView(cart);
    console.log(view.getView());
}
