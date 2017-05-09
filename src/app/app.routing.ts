import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  { path:'', redirectTo: 'tv', pathMatch: 'full' },
  { path:'**', redirectTo: 'tv', pathMatch: 'full' }
]

export const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: false,
  useHash: false
})