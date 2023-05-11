import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PolicyComponent } from './policy/policy.component';
import { CandidateComponent } from './candidate/candidate.component';
import { PresidentComponent } from './president/president.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'president',
    component: PresidentComponent
  },
  {
    path: 'candidate',
    component: CandidateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
