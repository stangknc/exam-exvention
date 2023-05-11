import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresidentComponent } from '../president.component';

const routes: Routes = [
  {path: 'president', component: PresidentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresidentRoutingModule { }
