import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment';
import { Auth } from '../../shared/models';

@Injectable()
export class AuthService {
    private authserver = environment.authendpoint;
    private authclientid = environment.authclientid;
    private authsecret = environment.authsecret;
    private authaudience = environment.authaudience;
    private granttype = 'client_credentials';

    constructor(private http: HttpClient) {}

    public getToken(): string {
        return localStorage.getItem('articleToken');
    }

    public loadToken() {
        const jwtHelper = new JwtHelperService();
        const token = localStorage.getItem('articleToken');

        if (token == null || token === '' || jwtHelper.isTokenExpired(token)) {
            localStorage.removeItem('articleToken');
            const body = this.getAuthRequest();
            this.http.post(this.authserver, body).subscribe((response: any) => {
                localStorage.setItem('articleToken', response.access_token);
            });
        }
    }

    private getAuthRequest(): Auth {
        const auth: Auth = {
            grant_type: this.granttype,
            client_id: this.authclientid,
            client_secret: this.authsecret,
            audience: this.authaudience
        };

        return auth;
    }
}
