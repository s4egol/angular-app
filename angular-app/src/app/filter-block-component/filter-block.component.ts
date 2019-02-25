import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArticleService } from '../../app/services/article.service';

@Component({
  selector: 'filter-block-component',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.css']
})

export class FilterBlockComponent implements OnInit {

  public isSourcePickerAvailable: boolean = true;
  public sources: string[] = ['Local news']; 

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
      this.articleService.getSources().subscribe(
          (response) => this.sources = [...this.sources, ...response]
      );
      this.articleService.updatedSource.emit(this.sources[0]);
  }

  onChangeOption(source: string): void {
      this.articleService.updatedSource.emit(source);
  }

  onFilterClick(query: string) {
      this.articleService.updateFilterValue.emit(query);
  }
}
