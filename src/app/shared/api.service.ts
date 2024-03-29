import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
postRestaurant(data:any){

  return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
    return res
  }))
}  
  
  //Get 
  getRestaurant(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res
    }))
  } 

  //Get 
  updateRestaurant(data:any,id:number){
    return this._http.get<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res
    }))
  } 
  //delete 
  deleteRestaurant(id:number){
    return this._http.get<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res
    }))
  } 
 IsLoggedin(){
   return !!localStorage.getItem('token')
 }
  
}