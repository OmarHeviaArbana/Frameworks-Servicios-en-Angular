import { Component} from '@angular/core';
import { Article } from './article-new-template.model';


@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css',
})
export class ArticleNewTemplateComponent   {

public article?: Article;
constructor() {
  this.article =  new Article('', 0, '', false,);
}


createArticle(articleForm: any) {
    if (articleForm.valid) {
      this.article = articleForm.value.article;
      console.log('Artículo Creado', this.article);
    } else {
      console.log('Formulario inválido');
    }
  }
}
