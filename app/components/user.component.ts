import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: `./app/components/user.component.html`,
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    this.name = 'Mageshwaran Nathan';
    this.email = 'get.mageshwaran@gmail.com';
    this.address = {
      no: '25B',
      building: 'Kingston',
      street: 'Balaclava',
      town: 'Coonoor',
      district : 'The Nilgiris',
      state: 'Tamil Nadu',
      country: 'India',
      Continent: 'Asia',
      pincode: 643102
    };
    this.hobbies = ['Cricket', 'Football', 'Reading'];
    this.showHobbies = true;
  }

  toogleHobbies(){
    if(this.showHobbies==true)
      this.showHobbies = false;
    else
      this.showHobbies = true;
  }

 }

 interface address{
    no: string,
    building: string,
    street: string,
    town: string,
    district : string,
    state: string,
    country: string,
    Continent: string,
    pincode: number
 }
