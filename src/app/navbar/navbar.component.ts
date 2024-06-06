import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  articleList: boolean = true;
  articleNewTemplate: boolean = false;
   articleNewReactive: boolean = false;

  showComponent(component: string) {
    this.articleList = false;
     this.articleNewTemplate = false;
    this.articleNewReactive = false;

    if (component === 'articleList') {
      this.articleList = true;
    }  else if (component === 'articleNewTemplate') {
      this.articleNewTemplate = true;
    }else if (component === 'articleNewReactive') {
      this.articleNewReactive = true;
    }
  }

}
