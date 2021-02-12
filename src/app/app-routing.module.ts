import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPersonnagesComponent } from "src/app/list-personnages/list-personnages.component";
import { CreatePersonnageComponent } from "src/app/create-personnage/create-personnage.component";
import { PersonnageDetailsComponent } from "src/app/personnage-details/personnage-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'personnage', pathMatch: 'full' },
  { path: 'personnages', component: ListPersonnagesComponent },
  { path: 'add', component: CreatePersonnageComponent },
  { path: 'details/:id', component: PersonnageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
