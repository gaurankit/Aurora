import { Component, OnInit, Input } from '@angular/core';
import{ HeaderInfo } from './header.model'


@Component({
  selector: 'Aurora-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  @Input() headerInfo: any;
  @Input() mainNav: any;
  @Input() backgroundColor: String;

  constructor() {
      this.mainNav = [
        {
          title: 'Home', url: '#'
        },
        {
          title: 'My Trips', url: '#'
        },
        {
          title: 'My Account', url: '#'
        },
      ]
  }

  ngOnInit() {
  }
  _logoTapped(){
    
  }

}
