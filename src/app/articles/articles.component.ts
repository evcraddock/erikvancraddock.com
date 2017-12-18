import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { URLSearchParams } from '@angular/http';
import { ArticleService } from '../shared/services/article.service';
import { IGitHubFile } from '../shared/models/gitHubFile';
import { IArticle } from '../shared/models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  public title = 'Articles';
  public articles: IArticle[] = [];


  // constructor(private route: ActivatedRoute, private articleService: ArticleService) {}
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.title = this.route.snapshot.params['category'];
    this.route.params.subscribe(params => {
      this.articles = [];
      this.title = params['category'];
      this.loadArticles();
    });
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

        // if (data['links'] instanceof Array && data['links'].length > 0) {
        //   this.links = data['links'];
        // }
      });
    }
    // const params = new URLSearchParams();
    // params.append('categories', 'Work');

    // this.articleService.getArticles(params).subscribe(articles => {
    //   this.articles = articles;
    // });
  }
}
