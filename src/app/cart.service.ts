import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:any = [];
  total: any;

  constructor() { }

  addToCart(travel: any){
    this.items.push(travel);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getSum(){
    this.total = 0;
    for (let i = 0; i < this.items.length; i+=1){
      this.total += this.items[i].price;
     }
     if (this.total >= 200 && this.total <= 499) {
       this.total = this.total * 0.9;
       alert("You are getting 10% Discount");
     }
     if (this.total >= 500){
       this.total = this.total *0.8;
       alert("You are getting 20% Discount");
     }
     return this.total;
  }

  setSumZero(){
    this.total = 0;
    return this.total;
  }
}
