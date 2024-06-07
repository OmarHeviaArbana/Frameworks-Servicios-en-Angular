import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { NameArticleValidator } from './article-validators';
import { ArticleService } from '../Services/article-service/article-service.service';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})


export class ArticleNewReactiveComponent {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator()]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\/[a-zA-Z0-9.-]+)*\/?[a-zA-Z0-9.-]+\.(jpg|jpeg|png|gif)$/)]],
      onSale: [false]
    });
  }

  get name() {
    return this.articleForm.get('name');
  }
  get price() {
    return this.articleForm.get('price');
  }
  get imageUrl() {
    return this.articleForm.get('imageUrl');
  }
  get onSale() {
    return this.articleForm.get('onSale');
  }

  createArticle() {
    if (this.articleForm.valid) {
      this.articleService.create(this.articleForm.value).subscribe(article => {
        console.log('Artículo Creado', article);
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  errorControl(formControlName: string, errorName: string): boolean {
    const control = this.articleForm.get(formControlName);
    return control ? control.hasError(errorName) && (control.dirty || control.touched) : false;
  }
}
