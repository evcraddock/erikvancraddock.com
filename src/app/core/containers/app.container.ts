import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { AnalyticsService } from '../services/analytics.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-evc-app',
    template: `
<div class="main-container">
    <mat-toolbar color="primary">
        <div class="" style="width: 100%">
            <span><a class="titlelink" [routerLink]="['/']">{{ title }}</a></span>
            <span class="nav"></span>

            <app-evc-nav-item routerLink="/family" hint="Family">
                Family
            </app-evc-nav-item>

            <app-evc-nav-item routerLink="/work" hint="Work">
            Work
            </app-evc-nav-item>

            <app-evc-nav-item routerLink="/ideas" hint="ideas">
            Ideas
            </app-evc-nav-item>

            <span class="nav-spacer"></span>
        </div>
    </mat-toolbar>

    <div class="outer">
        <router-outlet></router-outlet>
    </div>
</div>
`,
styles: [`
    .secondary {
      color: rgba(0, 0, 0, 0.54);
    }

    .titlelink {
        color: white;
        font-weight: normal;
        font-size: 16px;
        text-decoration: none;
    }

    .titlelink:hover {
        text-decoration: underline;
    }

    .nav {
        padding: 10px;
    }

    .nav-spacer {
        flex: 1 1 auto;
    }

    .main-container {
        background-color: #f5f8f9;
    }
`],
})
export class AppComponent implements OnInit, OnDestroy {
    public constructor (public matIconRegistry: MatIconRegistry, private analyticsService: AnalyticsService){
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    title = 'ERIK.VAN.CRADDOCK';

    ngOnInit(): void {
        if (environment.production) {
            this.analyticsService.subscribe();
        }
    }
    ngOnDestroy(): void {
        this.analyticsService.unsubscribe();
    }
}
