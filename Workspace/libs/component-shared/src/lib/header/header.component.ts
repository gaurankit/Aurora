import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() open = new EventEmitter();

  visible : boolean = false;

  constructor() {
      this.mainNav = [
        {
          title: 'Home', url: '#'
        },
        {
          title: 'My Trips', url: 'home'
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
  openDrawer(){
    this.visible = !this.visible;
    this.open.emit(this.visible);
  }
}
