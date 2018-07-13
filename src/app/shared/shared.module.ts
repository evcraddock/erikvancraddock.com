import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { AboutMeComponent } from './components/about/about-me.component';
import { MarkdownToHtmlPipe, SafePipe } from './pipes';
import { ArticlesSummaryItemComponent } from './components/articles-summary-item/articles-summary-item.component';
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
        ArticlesSummaryItemComponent,
        ArticlesListItemComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ],
    exports: [
        AboutMeComponent,
        ArticlesSummaryItemComponent,
        ArticlesListItemComponent,
        MarkdownToHtmlPipe,
        SafePipe
    ]
})
export class SharedModule {}