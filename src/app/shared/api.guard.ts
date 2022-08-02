import { Injectable } from '@angular/core';
import {CanActivate, Router,  } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiGuard implements CanActivate {
  constructor(private auth:ApiService, private router:Router) {

  }
  canActivate()
    {
      if(this.auth.IsLoggedin()){

        return true;
      }
      this.router.navigate(['login'])
      return false
  }
  
}
