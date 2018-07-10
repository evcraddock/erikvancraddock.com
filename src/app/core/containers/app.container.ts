import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";

@Component({
    selector: 'evc-app',
    template: `
<div class="main-container">
    <evc-toolbar>
        <span><a class="titlelink" [routerLink]="['/']">ERIK.VAN.CRADDOCK</a></span>
        <span class="nav"></span>

        <evc-nav-item routerLink="/family" hint="Family">
            Family
        </evc-nav-item>

        <evc-nav-item routerLink="/work" hint="Work">
          Work
        </evc-nav-item>

        <evc-nav-item routerLink="/ideas" hint="ideas">
          Ideas
        </evc-nav-item>

        <span class="nav-spacer"></span>
    </evc-toolbar>

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