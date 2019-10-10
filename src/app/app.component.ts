import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  length = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  // 清空
  clearInput(input: HTMLInputElement) {
    input.value = '';
    this.getLength(input.value);
  }
  // 回傳字數
  getLength(value: string) {
    this.length = value.length;
  }
}
