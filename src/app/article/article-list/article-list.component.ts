import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  counter = 0;
  data$: Observable<any>; // 加上 $ 字號是一般我們在命名 observable 物件的命名習慣

  // 屬性繫結
  // 資料從父元件來
  // 不能寫在 constructor 內，建構式執行時，component 還沒初始化，包含子元件還未初始化，父元件也可能還未初始化
  // @Input()
  // data: Array<any>;

  // datasvc: DataService;
  // constructor(datasvc: DataService) {
  // private / public 透過 TypeScript 型別標註就可以直接完成 DI
    constructor(public datasvc: DataService) {
    // this.datasvc = datasvc;
  }

  // 初始化後執行的程式碼
  // 屬性初始化請寫 ngOnInit 內
  ngOnInit() {
    this.datasvc.run();

    setTimeout(() => {
      this.counter++;
    }, 2000);

    // this.data = this.datasvc.data;

    // this.datasvc.getData().subscribe(result => {
    //   this.data = result;
    // });

    this.data$ = this.datasvc.getData();
  }

  // 摧毀清空
  ngOnDestroy() {

  }

  // doDelete(item) {
  //   this.datasvc.doDelete(item).subscribe(result => {
  //     this.data = this.data.filter((v) => {
  //       // return v !== item;
  //       // 當傳入 item 是全新物件時，要改 id 比對，物件和物件不具可比性
  //       // 比對唯一值 id
  //       return v.id !== item.id;
  //     });
  //   },
  //   (error) => {
  //     console.log(error);
  //   });
  // }

  // // changeTitle($event: any) {
  // doModify(post: any) {
  //   this.datasvc.doModify(post).subscribe(result => {
  //     this.data = this.data.map((item) => {
  //       if (item.id === post.id) {
  //         return Object.assign({}, item, post);
  //       }
  //       return item;
  //     });
  //   },
  //   (error) => {
  //     console.log(error);
  //   });
  // }
}
