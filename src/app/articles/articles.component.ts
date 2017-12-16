import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ArticleService } from '../shared/services/article.service';
import { IGitHubFile } from '../shared/models/gitHubFile';
import { IArticle } from '../shared/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  title = 'articles';
  public articles: IArticle[] = [];


  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.loadArticles();
  }

  hasArticles() {
    return this.articles.length > 0;
  }

  loadArticles() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}
