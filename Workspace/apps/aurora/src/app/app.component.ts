import { Component } from '@angular/core';

@Component({
  selector: 'Aurora-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //backgroundColor = "accent"

  headerInfo =  {
    brand: {
      name: "ORXe 3.0",
      icon: "menu",
      imageUrl: "",
      url: "/" 
    },
    userInfo: {
      firstName:"John",
      LastName: "Simth",
      availablePoints: 20000,
      icon : "account_circle"
  
    }
  }

  mainNav = [
    {
      title: 'Home', url: '#'
    },
    {
      title: 'My Trips', url: '#'
    },
    {
      title: 'My Account', url: '#'
    }
  ]

}
