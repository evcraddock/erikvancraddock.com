import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Article } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PageEvent } from '@angular/material';
import { ImageService } from '../../../core/services/image.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: [ './articles.component.scss' ]
})
export class ArticlesComponent implements OnInit {
  public title = 'Articles';
  public articles: Article[] = [];
  public profile: Profile;
  public pagedArticles: Article[] = [];
  public pagesize = 10;
  public pageIndex = 0;
  public pageEvent: PageEvent;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private imageService: ImageService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
    };

    this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
        }
    });
  }

  ngOnInit(): void {
    this.profile = Profile.getDefaultProfile();
    this.route.params.subscribe(params => {
      this.articles = [];
      this.title = params['category'];
      this.loadArticles();
      this.changePage();
    });
  }

  hasArticles() {
    return this.articles.length > 0;
  }

  loadArticles() {
    if (this.route.data) {
      this.route.data.forEach(data => {
        if (data['articles'] instanceof Array && data['articles'].length > 0) {
          for (let item of data['articles']) {
            const article = Article.mapFrom(item);
            article.banner = this.imageService.getBannerImage(article);

            this.articles.push(article);
          }
        }
      });
    }
  }

  changePage(event?: PageEvent) {
    if (event != null) {
      this.pageIndex = event.pageIndex;
    }
    const startIndex = this.pageIndex * this.pagesize;
    const endIndex = startIndex + this.pagesize;

    this.pagedArticles = this.articles.slice(startIndex, endIndex);
  }
}
