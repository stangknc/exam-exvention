import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PolicyComponent } from './policy/policy.component';
import { PresidentComponent } from './president/president.component';
import { CandidateComponent } from './candidate/candidate.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Candidate2Component } from './candidate/candidate2/candidate2.component';
import { PopupComponent } from './shared/popup/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PolicyComponent,
    PresidentComponent,
    CandidateComponent,
    HeaderComponent,
    Candidate2Component,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
