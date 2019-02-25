import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponce, SourceItem } from '../../app/models/response';
import { Article, ArticleResponse } from '../../app/models/article';
import { map } from 'rxjs/operators';
import { API_KEY, SOURCES, NEWS_BASE_URL } from '../../constants/index';
import * as localArticles from '../../assets/articles.json';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
    public updatedSource: EventEmitter<string> = new EventEmitter();
    public updateFilterValue: EventEmitter<string> = new EventEmitter();
    public updateArticles: EventEmitter<any> = new EventEmitter();

    private articles: Array<Article>;
    private source: string = 'CNN';

    constructor(private httpClient: HttpClient) { }

    changeSource(source: SourceItem){
        this.updatedSource.emit(source.name);
        this.source = source.id;
        this.getArticles();
    }

    public getSources() {
        return this.httpClient.get<ApiResponce>(`${SOURCES}country=us&apiKey=${API_KEY}`)
          .pipe(
              map((reponse: ApiResponce) => {
                  return reponse.sources.map(item => item.name);
              })
          );
    }

    public getArticles() {
        if (this.source === 'local') {
            this.articles = localArticles;
            this.updateArticles.emit(this.articles);
            return this.articles;
        }

        return this.httpClient.get<ArticleResponse>(`${NEWS_BASE_URL}${this.source}&apiKey=${API_KEY}`)
            .pipe(
                map((response: ArticleResponse) => {
                    this.articles = response.articles.map((article, index) => {
                        return {...article, _id: '' + index }
                    });
                    this.updateArticles.emit(this.articles);
                    return this.articles;
                })
        );
    }
}
