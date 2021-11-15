"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.shoppingCart = [];
        this.cartQuantity = [];
    }
    ;
    Cart.prototype.addToCart = function (newItem, itemAmount) {
        this.shoppingCart.push(newItem);
        this.cartQuantity.push(itemAmount);
    };
    Cart.prototype.removeFromCart = function (index) {
        this.shoppingCart.splice(index, 1);
        this.cartQuantity.splice(index, 1);
    };
    Cart.prototype.getCart = function () {
        return this.shoppingCart;
    };
    Cart.prototype.getQuantity = function () {
        return this.cartQuantity;
    };
    return Cart;
}());
exports.Cart = Cart;
