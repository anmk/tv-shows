import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routerModule } from './tv-finder.routing';
import { TvFinderComponent } from './tv-finder.component';
import { TvListComponent } from './tv-list.component';
import { TvCardListComponent } from './tv-card-list.component';
import { TvFinderService } from './tv-finder.service';
import { TvFormComponent } from './tv-form.component';
import { TvDetailsComponent } from './tv-details.component';
import { TvSharedModule } from '../tv-shared/tv-shared.module';
import { TvCardDetailsComponent } from './tv-card-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    routerModule,
    TvSharedModule
  ],

  declarations: [
    TvFinderComponent, 
    TvListComponent, 
    TvCardListComponent, 
    TvFormComponent,
    TvCardDetailsComponent,
    TvDetailsComponent
  ],

  exports: [],
  
  providers: [
    TvFinderService
  ]
})

export class TvFinderModule {}
