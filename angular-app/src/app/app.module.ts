import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditFormComponent } from './edit-form-component/edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ArticleViewerComponent } from './article-viewer-component/article-viewer.component';
import { HeaderComponent } from './header-component/header.component';
import { FilterBlockComponent } from './filter-block-component/filter-block.component';
import { ArticleBlockComponent } from './article-block-component/article-block.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleFilterPipe } from './pipes/article-filter/article-filter.pipe';
import { ArticleService } from './services/article.service';

const appRoutes: Routes =[
    { path: '', component: ArticleViewerComponent},
    { path: 'edit/:id', component: EditFormComponent},
    { path: 'create', component: EditFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EditFormComponent,
    ArticleViewerComponent,
    HeaderComponent,
    FilterBlockComponent,
    ArticleBlockComponent,
    ArticleFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
