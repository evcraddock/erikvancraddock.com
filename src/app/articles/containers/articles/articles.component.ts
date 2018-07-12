import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IArticle } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: [ './articles.component.scss' ]
})
export class ArticlesComponent implements OnInit {
  public title = 'Articles';
  public articles: IArticle[] = [];
  public profile: Profile;
  public pagedArticles: IArticle[] = [];
  public pagesize = 10;
  public pageIndex = 0;
  public pageEvent: PageEvent;

  constructor(private route: ActivatedRoute, private router: Router) {
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
          this.articles = data['articles'];
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
