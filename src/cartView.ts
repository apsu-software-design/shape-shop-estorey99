import { Product } from "./products";
import { Cart } from "./cart";
export class PriceView{
   private model: Cart;
    constructor(model: Cart) {
        this.model = model;
    }
 
    public getView(): string {
        let total: number = 0;
        let tempCart: Product[] = this.model.getCart();
        let tempQuantity: number[] = this.model.getQuantity();
        let index: number;
        tempCart.forEach((value: Product, index: number)=>{

            total += value.getPrice() * (tempQuantity[index]);
        })
        let output: string = "Your Total Price: $" + total.toString();
        return output;

    }
}
export class CartView {
  private  model: Cart;
    constructor(model: Cart)
    {
        this.model = model;
    }
    getView():string
    {
        let tempCart: Product[] = this.model.getCart();
        let tempQuantity: number[] = this.model.getQuantity();
        let output: string = "";
        for (let i = 0; i < tempCart.length; i++) {
          output+= "\n       Name: " + tempCart[i].getName()+
                   "\n       Price: " + tempCart[i].getPrice()+
                   "\n       Description: " + tempCart[i].getDescription()+
                   "\n       Quantity: " + tempQuantity[i];
        }
        return output;
    }
}

export class RemoveView {
   private model: Cart;
    constructor(model: Cart) {
        this.model = model;
    }
    public getView(): string
    {
        let tempCart: Product[] = this.model.getCart();
        let output: string="Select an item to be removed from the cart. \n"
        for (let i = 0; i < tempCart.length; i++)
        {
         output+=  i + " : " + tempCart[i].getName()+"\n";
        }
        return output;
    }
}