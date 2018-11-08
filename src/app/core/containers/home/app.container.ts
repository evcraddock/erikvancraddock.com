import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { AnalyticsService } from '../../services/analytics.service';
import { environment } from '../../../../environments/environment';
import { Profile } from '../../../shared/models/profile';

@Component({
    selector: 'app-evc-app',
    templateUrl: './app.container.html',
    styleUrls: ['./app.container.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public constructor (public matIconRegistry: MatIconRegistry, private analyticsService: AnalyticsService){
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    title = 'ERIK.VAN.CRADDOCK';
    profile: Profile = null;

    ngOnInit(): void {
        this.profile = Profile.getDefaultProfile();

        if (environment.production) {
            this.analyticsService.subscribe();
        }
    }
    ngOnDestroy(): void {
        this.analyticsService.unsubscribe();
    }
}
