import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShowlistSelectorComponent } from './showlist-selector.component';
import { TvDescriptionComponent } from './tv-description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    ShowlistSelectorComponent,
    TvDescriptionComponent
  ],

  exports: [
    ShowlistSelectorComponent,
    TvDescriptionComponent
    ]
})

export class TvSharedModule {}
