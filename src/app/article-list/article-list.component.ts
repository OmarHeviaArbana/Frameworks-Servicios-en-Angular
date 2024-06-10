import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article, ArticleQuantityChange  } from '../article-item/article.model';
import { ArticleService } from '../Services/article-service/article-service.service';


@Component({
  selector: 'app-article-list',
  template: `
  <div>
    <app-article-item
      *ngFor="let article of articles"
      [article]="article"
      (addArticle)="addArticleUnit($event.article.id)"
      (removeArticle)="removeArticleUnit($event.article.id)"
      >

    </app-article-item>

  </div>
  `,
  styles: [`
  div {
    display: grid;
    grid-template-columns: 1fr ;
    gap: 40px;
    justify-content: center;
    margin: 0 5% auto;
  }

  @media only screen and (max-width: 600px) {
    div {
      grid-template-columns: 1fr  ;
    }
  }
  @media only screen and (min-width: 600px) {
    div {
      grid-template-columns: 1fr  ;
    }
  }
  @media only screen and (min-width: 992px) {
    div {
      grid-template-columns: 1fr ;
    }
  }
  @media only screen and (min-width: 1200px) {
    div {
      grid-template-columns: 1fr 1fr ;
      margin: 0 10% auto;
    }
  }
  @media only screen and (min-width: 1900px) {
    div {
      grid-template-columns: 1fr 1fr 1fr;

    }
  }

  `]
})
export class ArticleListComponent implements OnInit{

 @Input() articles: Article[] = [];
 @Output() articleQuantityChange = new EventEmitter<ArticleQuantityChange>();

 constructor(private articleService: ArticleService) {};

  ngOnInit(): void {
      this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;


    });
  }

  addArticleUnit(articleID: number ): void {
    this.articleService.changeQuantity(articleID, 1).subscribe();

  }

  removeArticleUnit(articleID: number ): void {
    this.articleService.changeQuantity(articleID, -1).subscribe();

  }
}


