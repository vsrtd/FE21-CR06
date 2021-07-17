import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart:any;
  checkOut:any;
  total:any;
  constructor(private CS: CartService, private FB: FormBuilder) {
    this.checkOut = this.FB.group({
      name:"",
      address:""
    })

   }

  ngOnInit(): void {
    this.cart = this.CS.getItems();
    this.total = this.CS.getSum();
    console.log(this.total);
  }

  onSubmit(data: {name:string, address: string}){
    console.log("Your order has been submitted", data);
    this.cart = this.CS.clearCart();
    this.checkOut.reset();
    this.total = this.CS.setSumZero();
    alert("Thank you!");
  }
}
