import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';
import { ApiGuard } from './shared/api.guard';
import { NotFoundComponent } from './not-found/not-found.component';


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
    path: 'restaurant',component:RestaurantDashComponent,canActivate:[ApiGuard]
  },
  {
    path: '**',component:NotFoundComponent
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
