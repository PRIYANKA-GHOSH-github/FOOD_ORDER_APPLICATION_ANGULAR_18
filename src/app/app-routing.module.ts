import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PayComponent } from './components/pages/pay/pay.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';

const routes: Routes = [
  //search under homecomponent path//
 {path:'' ,component:HomeComponent},
  
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'home', component: HomeComponent }, // Ensure this route exists if it's the default
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    // other routes
  
  
  {
    path:'tag/:tag',component:HomeComponent
  },
  {
    path:'food/:id',component:FoodPageComponent
  },
  {
    path:'cart-page',component:CartPageComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'pay',component:PayComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
