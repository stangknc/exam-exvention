import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Candidate2RoutingModule } from './candidate2-routing.module';
import { Candidate2Service } from '../service/candidate2.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Candidate2RoutingModule
  ],
  providers: [
    Candidate2Service
  ]
})
export class Candidate2Module { }
