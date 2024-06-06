import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';
import { ArticleQuantityChange } from './article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})

export class ArticleItemComponent {

  @Input() article = {} as  Article
  @Output() articleQuantityChange = new EventEmitter<ArticleQuantityChange>();
  @Output() addArticle = new EventEmitter<ArticleQuantityChange>();
  @Output() removeArticle = new EventEmitter<ArticleQuantityChange>();

  articleQuantity: number = 0;
      quantityChange(quantity: number): void {
        const quantityChange: ArticleQuantityChange = {
          article: this.article,
          quantity
        };
        this.articleQuantityChange.emit(quantityChange);

      }
      removeArticleUnit(quantity: number): void {
        const quantityChange: ArticleQuantityChange = {
          article: this.article,
          quantity
        };

        this.removeArticle.emit(quantityChange);
      }
      addArticleUnit(quantity: number): void {
        const quantityChange: ArticleQuantityChange = {
          article: this.article,
          quantity
        };

        this.addArticle.emit(quantityChange);
      }



}
