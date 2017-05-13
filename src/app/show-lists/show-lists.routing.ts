import { RouterModule, Routes } from '@angular/router';

import { ShowListsComponent } from './show-lists.component';
import { ShowDetailComponent } from './show-details.component';
import { ShowFormComponent } from './show-form.component';
import { ShowDeleteComponent } from './show-delete.component';

const routesConfig:Routes = [
  { path:'showlists', component: ShowListsComponent,
children: [
  { path:'', component: ShowDetailComponent },
  { path:'new', component: ShowFormComponent },
  { path:':id', component: ShowDetailComponent },
  { path:':id/edit', component: ShowFormComponent },
  { path:':id/delete', component: ShowDeleteComponent },
  ]}
]

export const routerModule = RouterModule.forChild(routesConfig)