import {Injectable} from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { IGitHubFile } from '../models/gitHubFile';

@Injectable()
export class GitHubService {

    private serverUrl = environment.githubUrl;
    constructor(private http: Http, private router: Router) {}

    getGitHubFileContent(url: string): Observable<string> {
        return this.http.get(url).map((response: Response) => {
            return response.json().content;
        })
        .catch(this.handleError);
    }

    getGitHubFiles(keyword: string, owner: string, repo: string, path: string): Observable<IGitHubFile[]> {
        const querystring = keyword + '+user:' + owner + '+extension:md+repo:' + repo + '+path:' + path;
        return this.http.get(this.serverUrl + '/search/code?q=' + querystring)
        .map((response: Response) => {
            const files: IGitHubFile[] = [];
            response.json().items.forEach(element => {
                files.push(this.convertToGitHubFile(element));
            });

            return files;
        })
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = '';
        if (error.status === 404) {
            msg = 'Not able to connect to the GitHub server, try again later';
        } else {
            msg = error.statusText + ' - An unexpected error happened. Check the logs';
        }

        return Promise.reject(error);
    }

    private convertToGitHubFile(gitHubFile: any): IGitHubFile {
      let content = null;
      if (gitHubFile.content != null) {
        content = gitHubFile.content;
      }

      const gitfile: IGitHubFile = {
          name: gitHubFile.name,
          path: gitHubFile.path,
          url: gitHubFile.git_url,
          size: gitHubFile.size,
          content: content
      };

      return gitfile;
    }
}
