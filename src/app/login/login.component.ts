import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email:[''],
      password:[''],
    })
  }

  //login
login(){
  this._http.post<any>(API_URL + '/login' ,{
     email:this.loginForm.value.email,
        password:this.loginForm.value.password,
  }).subscribe(res=>{
    localStorage.setItem("token",res.data.token)

 
const user =res
  if(user){
    alert('User Login Successfully')
    this.loginForm.reset()
    this.router.navigate(['restaurant'])
  }
  else{
    alert("Wrong Credential ")
  }
  
  },err=>{
    alert("Email or Password is incorrect")
  })


}
}
