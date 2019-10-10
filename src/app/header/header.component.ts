import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  // 學習屬性行指令
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
    this.counter++;
  }

  getStyle() {
    return { 'font-size': (12 + this.counter) + 'px' };
  }
}
