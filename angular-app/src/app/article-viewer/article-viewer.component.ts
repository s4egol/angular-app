import { Component, OnInit } from '@angular/core';
import * as sources from '../../assets/sources-list.json'; 
import * as articles from '../../assets/articles.json';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})

export class ArticleViewerComponent implements OnInit {

  private articleBatch: number = 5;

  public sources: string[] = sources;
  public articles: any[];
  public selectedSource: string;

  constructor() { }

  ngOnInit() {
      this.articles = articles.slice(0, 4);
  }

  onChangeSource(source: string): void {
      this.selectedSource = source;
  }

  CanUploadArticles(){
      return this.articles.length < articles.length;
  }

  UploadAdditionalNews(){
      if (this.CanUploadArticles()){
          this.articles = articles.slice(0, this.articles.length - 1 + this.articleBatch);
      }
  }
}
