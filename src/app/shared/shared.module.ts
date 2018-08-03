import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { AboutMeComponent } from './components/about/about-me.component';
import { MarkdownToHtmlPipe, SafePipe } from './pipes';

import { ArticlesListItemComponent } from './components/articles-list-item/articles-list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        AboutMeComponent,
        ArticlesListItemComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ],
    exports: [
        AboutMeComponent,
        ArticlesListItemComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ]
})
export class SharedModule {}