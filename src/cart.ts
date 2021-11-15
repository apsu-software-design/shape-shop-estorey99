import { Product } from "./products"

export class Cart {
    constructor() { };
    shoppingCart: Product[] = [];
    cartQuantity: number[] = [];
    public addToCart(newItem: Product, itemAmount: number): void {
        this.shoppingCart.push(newItem);
        this.cartQuantity.push(itemAmount);
    }
    public removeFromCart(index: number): void {
        this.shoppingCart.splice(index,1);
        this.cartQuantity.splice(index,1);
    }
    public getCart(): Product[] {
        return this.shoppingCart
    }
    public getQuantity(): number[]
    {
        return this.cartQuantity;
    }


}
