import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public articles: IArticle[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  hasArticles() {
    return this.articles.length > 0;
  }

  loadArticles() {
    if (this.route.data) {
      this.route.data.forEach(data => {
        if (data['articles'] instanceof Array && data['articles'].length > 0) {
          this.articles = data['articles'];
        }
      });
    }
  }
}