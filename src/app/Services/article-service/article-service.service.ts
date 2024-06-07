import { Injectable } from '@angular/core';
import { Article } from './../../article-item/article.model';
import { Observable, of as Observableof} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  private articles: Article[] = [
    {
      name: 'MacBook Pro de 14 pulgadas - Gris espacial',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
      price: 2.029,
      isOnSale: true,
      quantityInCart: 0,
      id: 1
    },
    {
      name: 'MacBook Air de 15 pulgadas - Gris espacial',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
      price: 1.029,
      isOnSale: false,
      quantityInCart: 0,
      id: 2
    },
    {
      name: 'MacBook Pro de 16 pulgadas - Gris espacial',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
      price: 4.029,
      isOnSale: true,
      quantityInCart: 0,
      id: 3
    }
  ];

  getArticles(): Observable<Article[]> {
    return Observableof(this.articles);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article | null> {
    const article = this.articles.find(article => article.id === articleID);
    if (article) {
      article.quantityInCart += changeInQuantity;
      return Observableof(article);
    }
    return Observableof(null);
  }

  create(article: Article): Observable<any> {
    this.articles.push(article);
    return Observableof(article);
  }



}
