import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'priceArticleFormat'
})

export class PriceArticleFormat implements PipeTransform {
  transform(price: number): string {
    return price.toFixed(2) + ' €';
  }
}
