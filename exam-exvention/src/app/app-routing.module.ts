import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/routing/homepage.module').then( m => m.HomepageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/routing/policy.module').then( m => m.PolicyModule)
  },
  {
    path: 'president',
    loadChildren: () => import('./president/routing/president.module').then( m => m.PresidentModule)
  },
  {
    path: 'candidate',
    loadChildren: () => import('./candidate/routing/candidate.module').then( m => m.CandidateModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
