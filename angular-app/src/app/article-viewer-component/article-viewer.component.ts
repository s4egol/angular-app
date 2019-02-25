import { Component, OnInit } from '@angular/core';
import * as sources from '../../assets/sources-list.json'; 
import * as articles from '../../assets/articles.json';
import { ArticleService } from '../../app/services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'article-viewer-component',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})

export class ArticleViewerComponent implements OnInit {

  public sources: string[] = sources;
  public articles: Array<Article>;
  public selectedSource: string;
  public limit: number = 4;
  public query: string = '';

  constructor(
      private articleService: ArticleService
    ) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles) => {
        this.articles = articles;
    });
    this.articleService.updateFilterValue.subscribe((value: string) => {
        this.query = value;
    });
  }

  onChangeSource(source: string): void {
      this.selectedSource = source;
  }

  CanUploadArticles(){
      return this.articles.length <= this.limit;
  }

  UploadAdditionalNews(){
      if (this.CanUploadArticles()){
          this.limit += 3;
      }
  }
}
