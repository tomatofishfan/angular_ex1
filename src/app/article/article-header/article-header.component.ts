import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {
  @Input()
  item;

  // 事件繫結傳給父元件
  @Output()
  // 事件發射器 傳送型別為 any
  delete = new EventEmitter<any>();

  @Output()
  titleChange = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  constructor() { }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  doEdit(title) {
    this.newTitle = title;
    this.titleChange.emit({ id: this.item.id, title: title });
  }

  ngOnInit() {
    this.newTitle = this.item.title;
  }

  ngOnChanges(changes) {
    if (changes.item) {
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

}
