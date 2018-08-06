import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { AboutMeComponent, NavItemComponent } from './components';
import { MarkdownToHtmlPipe, SafePipe } from './pipes';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        AboutMeComponent,
        NavItemComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ],
    exports: [
        AboutMeComponent,
        NavItemComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ]
})
export class SharedModule {}
