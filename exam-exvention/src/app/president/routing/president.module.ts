import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresidentRoutingModule } from './president-routing.module';
import { PresidentService } from '../service/president.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PresidentRoutingModule
  ],
  providers: [
    PresidentService
  ]
})
export class PresidentModule { }
