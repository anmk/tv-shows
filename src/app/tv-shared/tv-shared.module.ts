import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShowlistSelectorComponent } from './showlist-selector.component';
import { TvSharedDetailsComponent } from './tv-shared-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    ShowlistSelectorComponent,
    TvSharedDetailsComponent
  ],

  exports: [
    ShowlistSelectorComponent,
    TvSharedDetailsComponent
    ]
})

export class TvSharedModule {}
