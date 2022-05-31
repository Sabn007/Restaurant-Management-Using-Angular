import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.module';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {
formValue!:FormGroup
restaurantModelObj : RestaurantData = new RestaurantData
allRestaurantData:any
showAdd!:boolean
showUpdate!:boolean

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({

      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })

    this.getRestaurantData()
  }
// Subscribing Data
addRestaurant(){
  this.restaurantModelObj.name = this.formValue.value.name
  this.restaurantModelObj.email = this.formValue.value.email
  this.restaurantModelObj.mobile = this.formValue.value.mobile
  this.restaurantModelObj.address = this.formValue.value.name
  this.restaurantModelObj.services = this.formValue.value.services


this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
  
  alert('Record added Successful')
  this.formValue.reset()
  this.getRestaurantData()
})
}

// Get All Data
getRestaurantData(){
  this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData = res
  })

}

//Delete Data
deleteRestaurantData(id:number){
  this.api.deleteRestaurant(id).subscribe(res=>{
   alert('Record Deleted')
   this.getRestaurantData()
 })

}
editRestaurantData(data:any){

  this.restaurantModelObj.id = data.id
  this.formValue.controls['name'].setValue(data.name)
  this.formValue.controls['email'].setValue(data.email)
  this.formValue.controls['mobile'].setValue(data.mobile)
  this.formValue.controls['address'].setValue(data.address)
  this.formValue.controls['services'].setValue(data.services)
}
updateRestaurant(){
  this.restaurantModelObj.name = this.formValue.value.name
  this.restaurantModelObj.email = this.formValue.value.email
  this.restaurantModelObj.mobile = this.formValue.value.mobile
  this.restaurantModelObj.address = this.formValue.value.name
  this.restaurantModelObj.services = this.formValue.value.services

  this.api.updateRestaurant(this.restaurantModelObj,this.restaurantModelObj.id).subscribe(res=>{
    alert('Edit successful')
    this.formValue.reset()
  this.getRestaurantData()
  })
}
}
