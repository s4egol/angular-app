import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'edit-form-component',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})

export class EditFormComponent implements OnInit {

  public header: FormControl = new FormControl('', Validators.required); 
  public description: FormControl = new FormControl('', Validators.required); 
  public content: FormControl = new FormControl('', Validators.required); 
  public source: FormControl = new FormControl('', Validators.required);
  public url: FormControl = new FormControl('', Validators.required);
  public imageUrl: FormControl = new FormControl('', Validators.required);
  public date: FormControl = new FormControl('', Validators.required); 
  public author: FormControl = new FormControl('', Validators.required); 
  public sourceUrl: FormControl = new FormControl('', Validators.required);

  private id: string;

  public articleEditForm: FormGroup = new FormGroup ({      
      header: this.header,
      description: this.description,
      content: this.content,
      imageUrl: this.imageUrl,
      url: this.url,
      date: this.date,
      author: this.author,
      sourceUrl: this.sourceUrl
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  private setFormValues(article: Article): void {
    this.header.setValue(article.title);
    this.description.setValue(article.description);
    this.content.setValue(article.content);
    this.url.setValue(article.url);
    this.imageUrl.setValue(article.urlToImage);
    this.author.setValue(article.author);
    this.sourceUrl.setValue(article.url);
    this.source.setValue(article.source.name);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      const article = this.articleService.getArticleById(this.id);
      if (article) {
        this.setFormValues(article);
      }
    }
  }
  
  public submitForm() {
    if (this.articleEditForm.valid) {
        let articleItem: Article = {
          source: {
            name: this.source.value
          },
          author: this.author.value,
          title: this.header.value,
          description: this.description.value,
          url: this.sourceUrl.value,
          urlToImage: this.imageUrl.value,
          content: this.content.value,
        }

        if (this.id){
            this.articleService.editArticle(articleItem, this.id);
        }
        else {
            this.articleService.addArticle(articleItem);
        }

        this.router.navigate(["/"]);
    }
  }
}
