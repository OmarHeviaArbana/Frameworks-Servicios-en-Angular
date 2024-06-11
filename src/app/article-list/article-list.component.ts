import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article, ArticleQuantityChange  } from '../article-item/article.model';
import { ArticleService } from '../Services/article-service/article-service.service';
import {  distinctUntilChanged, startWith,debounceTime, switchMap, share } from 'rxjs/operators';
import { Observable, Subject, of} from 'rxjs';

@Component({
  selector: 'app-article-list',
  template: `
  <div>
    <input
          class="form-control mt-4"
          name="searchBox"
          [(ngModel)]="searchString"
          placeholder="Buscador de artículos"
          (keyup)="search()">
  </div>
  <div>
    <app-article-item
      *ngFor="let article of articles$ | async"
      [article]="article"
      (addArticle)="addArticleUnit(article.id)"
      (removeArticle)="removeArticleUnit(article.id)"
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

  public articles$: Observable<Article[]> = of([]);
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();

  constructor(private articleService: ArticleService) {};

  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.articleService.getArticles(query)),
      share()
    );
  }

  addArticleUnit(articleID: number ): void {
    this.articleService.changeQuantity(articleID, 1).subscribe(updatedArticle => {
      if (updatedArticle) {
        this.search();
      }
    });
  }

  removeArticleUnit(articleID: number ): void {
    this.articleService.changeQuantity(articleID, -1).subscribe(updatedArticle => {
      if (updatedArticle) {
        this.search();
      }
    });
  }
  search() {
    this.searchTerms.next(this.searchString);
  }
}


