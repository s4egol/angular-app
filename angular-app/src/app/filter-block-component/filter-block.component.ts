import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArticleService } from '../../app/services/article.service';
import { Source } from '../models/source';

@Component({
  selector: 'filter-block-component',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.css']
})

export class FilterBlockComponent implements OnInit {

  public isSourcePickerAvailable: boolean = true;
  public sources: Array<Source> = [{id: 'local', name: 'Local news'}]; 

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
      this.articleService.getSources().subscribe(
          (response) => this.sources = [...this.sources, ...response]
      );
      this.articleService.onChangeSource(this.sources[0]);
  }

  onChangeOption(source: string): void {
      const newSource = this.sources.find(item => item.name === source);
      this.articleService.onChangeSource(newSource);
  }

  onFilterClick(query: string) {
      this.articleService.updateFilterValue.emit(query);
  }
}
