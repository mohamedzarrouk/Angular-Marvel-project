import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PersonnageService } from "src/app/personnage.service";
import { Personnage } from "src/app/personnage";
import { Observable } from "rxjs";

@Component({
  selector: 'app-list-personnages',
  templateUrl: './list-personnages.component.html',
  styleUrls: ['./list-personnages.component.css']
})
export class ListPersonnagesComponent implements OnInit {

    personnages: Observable<Personnage[]>;

  constructor(private personnageService: PersonnageService,
    private router: Router) {}
 

  ngOnInit(){
    this.reloadData();
  }

    reloadData() {
    this.personnages = this.personnageService.getPersonnageList();
  }

    deletePersonnage(id: number) {
    this.personnageService.deletePersonnage(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

   personnageDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
