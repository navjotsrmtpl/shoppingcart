import { Injectable } from '@angular/core';
import * as cartdata from '../app/data/cartlist.json';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   cart :any= [];
  Cart = (cartdata as any).default;;
 
  constructor() { }
 
  getProducts() {
    console.log(this.Cart);
    
    return this.Cart;
  }
 
  getCart() {
    console.log(this.cart);
    
    return this.cart;
  }
 
  addProduct(product) {
    console.log(product);
    
    this.cart.push(product);
    console.log(this.cart);
    

  }

}
