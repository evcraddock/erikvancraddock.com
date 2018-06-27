import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Auth } from "../models/";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
    private authserver = environment.authendpoint;
    private authclientid = environment.authclientid;
    private authsecret = environment.authsecret;
    private authaudience = environment.authaudience;
    private granttype = "client_credentials";

    constructor(
        private http: HttpClient
    
    ) {}

    public getToken(): string {
        let token = localStorage.getItem("articleToken");

        const jwtHelper = new JwtHelperService();
        if (token == null || token == '' || jwtHelper.isTokenExpired(token)) {
            localStorage.removeItem('articleToken');
            this.loadToken();
            token = localStorage.getItem('articleToken');
        }

        return token;
    }

    private loadToken() {
        const body = this.getAuthRequest();
        return this.http.post(this.authserver, body)
        .subscribe((response: any) => {
            this.storeToken(response.access_token);
        });
    }

    private storeToken(content: any) {
        localStorage.setItem("articleToken", JSON.stringify(content));
    }

    private getAuthRequest(): Auth {
        const auth: Auth = {
            grant_type: this.granttype,
            client_id: this.authclientid,
            client_secret: this.authsecret,
            audience: this.authaudience
        }

        return auth;
    }
}