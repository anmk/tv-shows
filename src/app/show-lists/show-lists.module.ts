import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routerModule } from './show-lists.routing';
import { ShowListComponent } from './show-lists-package.component';
import { ShowListsComponent } from './show-lists.component';
import { ShowCardComponent } from './show-card.component';
import { ShowFormComponent } from './show-form.component';
import { ShowDeleteComponent } from './show-delete.component';
import { ShowDetailComponent } from './show-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routerModule,
  ],
  
  declarations: [
    ShowListsComponent,
    ShowCardComponent,
    ShowFormComponent,
    ShowDeleteComponent,
    ShowListComponent,
    ShowDetailComponent
  ],
  
  exports: [],

  providers: []
})

export class ShowListsModule {}
