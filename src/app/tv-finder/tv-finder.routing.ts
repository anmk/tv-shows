import { RouterModule, Routes } from '@angular/router';

import { TvFinderComponent } from './tv-finder.component';
import { TvDetailsComponent } from './tv-details.component';

const routesConfig:Routes = [
  { path:'tv', component: TvFinderComponent },
  { path:'tv/details/:details_id', component: TvDetailsComponent }
]

export const routerModule = RouterModule.forChild(routesConfig)
