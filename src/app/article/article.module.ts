import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  declarations: [ArticleListComponent, ArticleHeaderComponent, ArticleBodyComponent],
  // 需要匯出才能在 AppModule 使用
  exports: [ArticleListComponent]
})
export class ArticleModule { }
