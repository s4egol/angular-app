import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-block-component',
  templateUrl: './article-block.component.html',
  styleUrls: ['./article-block.component.css']
})

export class ArticleBlockComponent {

  @Input() article: any;

  constructor() { }
}
