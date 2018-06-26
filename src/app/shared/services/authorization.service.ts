import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Auth } from "../models/";

@Injectable()
export class AuthorizationService {
    private authserver = environment.authendpoint;
    private authclientid = environment.authclientid;
    private authsecret = environment.authsecret;
    private authaudience = environment.authaudience;
    private granttype = "client_credentials";

    constructor(private http: HttpClient) {}

    getToken(): string {
        var token;
        this.http.post(this.authserver, this.getAuthRequest(), {
            responseType: 'json'
        }).subscribe(value => {
            token = value;
        });

        return token;
    }

    getAuthRequest(): Auth {
        const auth: Auth = {
            grant_type: this.granttype,
            client_id: this.authclientid,
            client_secret: this.authsecret,
            audience: this.authaudience
        }

        return auth;
    }
}