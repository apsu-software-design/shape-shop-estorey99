"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveView = exports.CartView = exports.PriceView = void 0;
var PriceView = /** @class */ (function () {
    function PriceView(model) {
        this.model = model;
    }
    PriceView.prototype.getView = function () {
        var total = 0;
        var tempCart = this.model.getCart();
        var tempQuantity = this.model.getQuantity();
        var index;
        tempCart.forEach(function (value, index) {
            total += value.getPrice() * (tempQuantity[index]);
        });
        var output = "Your Total Price: $" + total.toString();
        return output;
    };
    return PriceView;
}());
exports.PriceView = PriceView;
var CartView = /** @class */ (function () {
    function CartView(model) {
        this.model = model;
    }
    CartView.prototype.getView = function () {
        var tempCart = this.model.getCart();
        var tempQuantity = this.model.getQuantity();
        var output = "";
        for (var i = 0; i < tempCart.length; i++) {
            output += "\n       Name: " + tempCart[i].getName() +
                "\n       Price: " + tempCart[i].getPrice() +
                "\n       Description: " + tempCart[i].getDescription() +
                "\n       Quantity: " + tempQuantity[i];
        }
        return output;
    };
    return CartView;
}());
exports.CartView = CartView;
var RemoveView = /** @class */ (function () {
    function RemoveView(model) {
        this.model = model;
    }
    RemoveView.prototype.getView = function () {
        var tempCart = this.model.getCart();
        var output = "Select an item to be removed from the cart. \n";
        for (var i = 0; i < tempCart.length; i++) {
            output += i + " : " + tempCart[i].getName() + "\n";
        }
        return output;
    };
    return RemoveView;
}());
exports.RemoveView = RemoveView;
