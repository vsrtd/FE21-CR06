import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {travels} from '../travels';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

   travels = travels;

     constructor(private CS: CartService) {
     console.log(travels);
    }

  addToCart(travel:any){
    alert("This adventure has been added to your Cart");
    this.CS.addToCart(travel);
    console.log(this.CS.getItems());
  }

   ngOnInit(): void {
  }

}
