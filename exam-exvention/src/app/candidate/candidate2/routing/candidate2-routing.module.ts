import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Candidate2Component } from '../candidate2.component';

const routes: Routes = [
  {
    path: '',
    component: Candidate2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Candidate2RoutingModule { }
