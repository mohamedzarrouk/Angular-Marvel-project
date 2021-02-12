import { Component, OnInit } from '@angular/core';
import { Personnage } from "src/app/personnage";
import { ActivatedRoute, Router } from "@angular/router";
import { PersonnageService } from "src/app/personnage.service";

@Component({
  selector: 'app-personnage-details',
  templateUrl: './personnage-details.component.html',
  styleUrls: ['./personnage-details.component.css']
})
export class PersonnageDetailsComponent implements OnInit {

  id: number;
  personnage : Personnage;
  constructor(private route: ActivatedRoute, private router: Router,
    private personnageService: PersonnageService) { }

  ngOnInit(): void {
        this.personnage = new Personnage();

    this.id = this.route.snapshot.params['id'];
    
    this.personnageService.getPersonnage(this.id)
      .subscribe(data => {
        console.log(data)
        this.personnage = data;
      }, error => console.log(error));
  }

    list(){
    this.router.navigate(['personnages']);
  }
}
