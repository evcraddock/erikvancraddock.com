import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';
import { SharedModule } from '../shared/shared.module';

import { ArticlesComponent, ArticleDetailComponent } from './containers';

export const COMPONENTS = [
    ArticlesComponent,
    ArticleDetailComponent,
  ];

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule,
        SharedModule,
    ],
    declarations: [
        COMPONENTS
    ],
    exports: COMPONENTS,
})
export class ArticlesModule {}