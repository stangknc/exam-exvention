import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageService } from '../service/homepage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  providers: [
    HomepageService
  ]
})
export class HomepageModule { }
