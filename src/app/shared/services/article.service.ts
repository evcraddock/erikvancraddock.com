import { GitHubService } from './gitHub.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IArticle } from '../models/article';
import { IGitHubFile } from '../models/gitHubFile';
import * as frontmatter from 'front-matter';
import { Http, Response } from '@angular/http';

@Injectable()
export class ArticleService {

  public articles: ReplaySubject<IArticle[]> = new ReplaySubject(1);

  constructor(private http: Http, private gitHubService: GitHubService) {}

  getArticles(category: string): Observable<IArticle[]> {
    let files: IGitHubFile[] = [];

    this.gitHubService.getGitHubFiles(category, 'evcraddock', 'erikvancraddock-hugo', 'content/post').subscribe(ghfiles => {
      files = ghfiles;
      const farticles: IArticle[] = [];

      files.forEach(file => {
        this.getArticle(file).subscribe(article => {
          farticles.push(article);
          this.articles.next(farticles);
        });
      });
    });

    return this.articles;
  }

  getArticle(file: IGitHubFile): Observable<IArticle> {

    return this.http.get(file.url).map((response: Response) => {
      const filecontent = response.json().content;

      const article: IArticle = {
        title: 'no title',
        author: '',
        banner: '',
        categories: null,
        content: null,
        tags: null,
        url: ''
      };

      const content: any = atob(filecontent);
      const fmfile = frontmatter(content);

      if (fmfile.attributes != null) {
        article.title = fmfile.attributes['title'];
        article.author = fmfile.attributes['author'];
        article.banner = fmfile.attributes['banner'];
        article.content = fmfile.attributes['content'];
      }

      return article;
    });
  }
}
