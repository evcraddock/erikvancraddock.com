import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';
import { SharedModule } from '../shared/shared.module';
import { reducers } from './reducers';

import { ArticlesComponent, ArticleDetailComponent } from './containers';
import { StoreModule } from '@ngrx/store';
import { ArtComponent } from './containers/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from './effects/articles';

export const COMPONENTS = [
    ArticlesComponent,
    ArtComponent,
    ArticleDetailComponent,
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
    exports: COMPONENTS
})
export class ArticlesModule {}