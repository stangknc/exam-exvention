import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateService } from '../service/candidate.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ],
  providers: [
    CandidateService
  ]
})
export class CandidateModule { }
