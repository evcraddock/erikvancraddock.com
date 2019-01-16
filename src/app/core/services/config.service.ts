import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    constructor(private injector: Injector) {}
    private appConfig: any;

    async loadConfig() {
        const http = this.injector.get(HttpClient);
        const data = await http.get('/config.json').toPromise();
        this.appConfig = data;
    }

    get config() {
        return this.appConfig;
    }
}
