import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss'
})
export class HomeComponent implements OnInit {
  public articles: IArticle[] = [];
  public profile: Profile = null;
  public pagedArticles: IArticle[] = [];
  public pagesize = 5;
  public pageIndex = 0;
  public pageEvent: PageEvent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.profile = Profile.getDefaultProfile();
    this.loadArticles();
    this.changePage();
    
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
