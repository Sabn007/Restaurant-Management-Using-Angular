import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';


const routes :Routes = [

  
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'signup',component:SignupComponent
  },
  {
    path: 'restaurant',component:RestaurantDashComponent
  },
  

]

@NgModule({
  imports:      [ CommonModule, RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
