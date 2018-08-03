import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { AboutMeComponent } from './components/about/about-me.component';
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
        MarkdownToHtmlPipe,
        SafePipe
    ],
    exports: [
        AboutMeComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ]
})
export class SharedModule {}