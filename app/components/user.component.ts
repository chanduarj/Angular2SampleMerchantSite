import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<p><strong>Name: </strong> {{name}}</p>
  <p><strong>Email: </strong> {{email}}</p>
  <p><strong>Address: </strong> {{address.no}}, {{address.building}}</p>
  <p>{{address.street}}\t{{address.town}} - {{address.pincode}}</p>
  <p>{{address.district}}</p>
  <p>{{address.state}}</p>
  <p>{{address.country}}</p>
  <p>{{address.Continent}}</p>
  <button (click) = 'toogleHobbies()'>{{showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}}</button>
  <div *ngIf = 'showHobbies'>
  <h3>Hobbies: </h3>
    <ul>
      <li *ngFor = 'let hobby of hobbies'>
        {{hobby}}
      </li>
    </ul>
  </div>`,
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
