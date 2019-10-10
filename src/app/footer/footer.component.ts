import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // template: ``,
  styleUrls: ['./footer.component.css'],
  // 不做封裝，渲染到整個網頁
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
