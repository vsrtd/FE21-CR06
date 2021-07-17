import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"blog", component: BlogComponent
  },
  {
    path:"travel", component: TravelComponent
  },
  {
    path:"checkout", component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
