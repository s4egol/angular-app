import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../../app/models/article';

@Pipe({
  name: 'articleFilter'
})

export class ArticleFilterPipe implements PipeTransform {

  transform(articles: Array<Article>, query: string) {
      if (articles && query) {
          return articles.filter(x => {
              x.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          });
      }

      return articles;
  }

}
