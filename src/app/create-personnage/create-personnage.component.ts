import { Component, OnInit } from '@angular/core';
import { Personnage } from "src/app/personnage";
import { PersonnageService } from "src/app/personnage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-personnage',
  templateUrl: './create-personnage.component.html',
  styleUrls: ['./create-personnage.component.css']
})
export class CreatePersonnageComponent implements OnInit {

  personnage: Personnage = new Personnage();
  submitted = false;

  constructor(private personnageService: PersonnageService,
    private router: Router) { }

  ngOnInit(): void {
  }

    newPersonnage(): void {
    this.submitted = false;
    this.personnage = new Personnage();
  }

    save() {
    this.personnageService
    .createPersonnage(this.personnage).subscribe(data => {
      console.log(data)
      this.personnage = new Personnage();
      this.gotoList();
    }, 
    error => console.log(error));
  }

    onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/personnages']);
  }

}
