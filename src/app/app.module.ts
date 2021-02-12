import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonnageComponent } from './create-personnage/create-personnage.component';
import { ListPersonnagesComponent } from './list-personnages/list-personnages.component';
import { PersonnageDetailsComponent } from './personnage-details/personnage-details.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonnageComponent,
    ListPersonnagesComponent,
    PersonnageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
