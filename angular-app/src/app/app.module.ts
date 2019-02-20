import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputBlockComponent } from './input-block/input-block.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';
import { HeaderComponent } from './header/header.component';
import { FilterBlockComponent } from './filter-block/filter-block.component';
import { ArticleBlockComponent } from './article-block/article-block.component';

const appRoutes: Routes =[
    { path: '', component: ArticleViewerComponent},
    { path: 'edit/:id', component: EditFormComponent},
    { path: 'create', component: EditFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InputBlockComponent,
    EditFormComponent,
    ArticleViewerComponent,
    HeaderComponent,
    FilterBlockComponent,
    ArticleBlockComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
