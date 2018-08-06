import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';
import { SharedModule } from '../shared/shared.module';
import { reducers } from './reducers';
import { ArticleService } from './services/article.service';

import {
    ArticlesComponent,
    ArticleDetailComponent,
    ArticleSummaryListComponent
} from './containers';

import {
    ArticlesSummaryItemComponent,
    ArticlesListItemComponent,
    ArticlesDetailCardComponent,
} from './components';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from './effects/articles';

export const COMPONENTS = [
    ArticlesComponent,
    ArticleSummaryListComponent,
    ArticleDetailComponent,
    ArticlesSummaryItemComponent,
    ArticlesListItemComponent,
    ArticleDetailComponent,
    ArticlesDetailCardComponent,
  ];

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule,
        SharedModule,
        StoreModule.forFeature('articles', reducers),
        EffectsModule.forFeature([ArticlesEffects])
    ],
    declarations: [
        COMPONENTS
    ],
    exports: COMPONENTS,
    providers: [
        ArticleService,
    ]
})
export class ArticlesModule {}
