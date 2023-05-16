import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyService } from '../service/policy.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PolicyRoutingModule
  ],
  providers: [
    PolicyService
  ]
})
export class PolicyModule { }
