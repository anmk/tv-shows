import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShowListsModule } from './show-lists/show-lists.module';
import { TvFinderModule } from './tv-finder/tv-finder.module';
import { TvSharedModule } from './tv-shared/tv-shared.module';
import { routerModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ShowListsService } from './show-lists/show-lists.service';
import { ShowlistSelectionService } from './tv-shared/showlist-selection.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],

  imports: [
    BrowserModule,
    ShowListsModule,
    TvFinderModule,
    routerModule,
    TvSharedModule
  ],

  providers: [
    ShowListsService,
    ShowlistSelectionService
    ],

  bootstrap: [AppComponent]
})

export class AppModule {}
