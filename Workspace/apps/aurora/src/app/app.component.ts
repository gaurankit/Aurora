import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'Aurora-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild('snav') private drawer : MatDrawer

  toggleSideNav(show){
    if(show){
      this.drawer.open();
    }else{
      this.drawer.close();
    }
  }

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
      title: 'Home', url: '/home'
    },
    {
      title: 'My Trips', url: '/'
    },
    {
      title: 'My Account', url: '#'
    }
  ]

}
