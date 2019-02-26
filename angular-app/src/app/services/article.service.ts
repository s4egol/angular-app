import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponce, SourceItem } from '../../app/models/response';
import { Article, ArticleResponse } from '../../app/models/article';
import { Source } from '../../app/models/source';
import { map } from 'rxjs/operators';
import { API_KEY, SOURCES, NEWS_BASE_URL, LOCAL_NEWS } from '../../constants/index';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
    public updatedSource: EventEmitter<string> = new EventEmitter();
    public updateFilterValue: EventEmitter<string> = new EventEmitter();
    public updateArticles: EventEmitter<any> = new EventEmitter();

    private articles: Array<Article>;
    private source: string = 'local';
    private httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    constructor(private httpClient: HttpClient) { }

    onChangeSource(source: Source){
        this.updatedSource.emit(source.name);
        this.source = source.id;

        this.getArticles().subscribe();
    }

    public getSources() {
        return this.httpClient.get<ApiResponce>(`${SOURCES}country=us&apiKey=${API_KEY}`)
          .pipe(
              map((reponse: ApiResponce) => {
                  return reponse.sources;
              })
          );
    }

    public getArticles() {
        var chooseUrl = this.source === 'local'
            ? `${LOCAL_NEWS}`
            : `${NEWS_BASE_URL}${this.source}&apiKey=${API_KEY}`;

        return this.httpClient.get<ArticleResponse>(chooseUrl)
            .pipe(
                map((response: ArticleResponse) => {
                    if (this.source === 'local') {
                        this.articles = response.articles;
                        this.updateArticles.emit(this.articles);
                        return this.articles;
                    }
                    this.articles = response.articles.map((article, index) => {
                        return {...article, _id: '' + index }
                    });
                    this.updateArticles.emit(this.articles);
                    return this.articles;
                })
        );
    }

    public getArticleById(id) {
        return this.articles.filter(article => article._id === id)[0];
    }

    public addArticle(article) {
        this.httpClient.post(`${LOCAL_NEWS}`, JSON.stringify(article), { ...this.httpOptions, responseType: 'text'}).subscribe(() => {
            this.getArticles().subscribe();
        });
    }

    public editArticle(article, id) {
        this.httpClient.put(`${LOCAL_NEWS}/${id}`, JSON.stringify(article), { ...this.httpOptions, responseType: 'text'}).subscribe(() => {
          this.getArticles().subscribe();
        });
    }
}
