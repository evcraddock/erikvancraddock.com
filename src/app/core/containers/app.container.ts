import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'app-evc-app',
    template: `
<div class="main-container">
    <app-evc-toolbar>
        <span><a class="titlelink" [routerLink]="['/']">ERIK.VAN.CRADDOCK</a></span>
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
    </app-evc-toolbar>

    <router-outlet></router-outlet>
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
    .nav {
        padding: 2px;
    }
    .nav-spacer {
        flex: 1 1 auto;
    }
`],
})
export class AppComponent {

    public constructor (public matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    title = 'app';
}
