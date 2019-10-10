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
  // length = 0;
  keyword = '';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  // 清空
  // clearInput(input: HTMLInputElement) {
  clearInput(input: HTMLInputElement) {
    this.keyword = '';
    // input.value = '';
    // this.getLength(input.value);
    // this.length = 0;
  }
  // 回傳字數
  // getLength(value: string) {
  //   this.length = value.length;
  // }
}

// 可參考他人文章
// https://dotblogs.com.tw/h20/2018/05/05/075204
