import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import * as articles from '../../assets/articles.json';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})

export class EditFormComponent implements OnInit {

  public id: number;

  public header: FormControl = new FormControl('', Validators.required); 
  public description: FormControl = new FormControl('', Validators.required); 
  public content: FormControl = new FormControl('', Validators.required); 
  public imageUrl: FormControl = new FormControl('', Validators.required);
  public date: FormControl = new FormControl('', Validators.required); 
  public author: FormControl = new FormControl('', Validators.required); 
  public sourceUrl: FormControl = new FormControl('', Validators.required);

  private articles: any[] = articles;
  private subscribtion: any;

  public articleEditForm: FormGroup = new FormGroup ({      
      header: this.header,
      description: this.description,
      content: this.content,
      imageUrl: this.imageUrl,
      date: this.date,
      author: this.author,
      sourceUrl: this.sourceUrl
  });

  constructor(private route: ActivatedRoute) { }

  private setFormValues(article: any): void {
    this.header.setValue(article.title);
    this.description.setValue(article.description);
    this.content.setValue(article.content);
    this.imageUrl.setValue(article.urlToImage);
    this.author.setValue(article.author);
    this.sourceUrl.setValue(article.url);
    this.date.setValue(article.publishedAt);
  }

  ngOnInit() {
    this.subscribtion = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id']; 
        let article = articles.find(item => item.id === this.id);
        if (article) {
          this.setFormValues(article);
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
  
  public submitForm(){
    console.log('Edit action completed!');
  }
}
