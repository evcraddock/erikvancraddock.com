import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';
import { SharedModule } from '../shared/shared.module';
import { reducers } from '../reducers';

import { ArticlesComponent, ArticleDetailComponent } from './containers';
import { StoreModule } from '../../../node_modules/@ngrx/store';
import { ArtComponent } from './containers/home/home.component';

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
    ],
    declarations: [
        COMPONENTS
    ],
    exports: COMPONENTS,
})
export class ArticlesModule {}