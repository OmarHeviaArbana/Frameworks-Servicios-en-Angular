import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImageArticle'
})

export class DefaultImageArticle implements PipeTransform {
  transform(imageUrl: string, defaultImage: string = 'assets/images/default-image.jpg'): string {
    return imageUrl.trim() === '' ? defaultImage : imageUrl;
  }
}
