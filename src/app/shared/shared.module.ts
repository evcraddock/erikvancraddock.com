import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { AboutMeComponent, NavItemComponent, PinterestListComponent } from './components';
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
        PinterestListComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ],
    exports: [
        AboutMeComponent,
        NavItemComponent,
        PinterestListComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ]
})
export class SharedModule {}
