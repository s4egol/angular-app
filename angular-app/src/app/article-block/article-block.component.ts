import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-block',
  templateUrl: './article-block.component.html',
  styleUrls: ['./article-block.component.css']
})

export class ArticleBlockComponent implements OnInit {

  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
