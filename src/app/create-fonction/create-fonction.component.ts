import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fonction } from '../fonction';
import { FonctionServiceService } from '../fonction-service.service';


@Component({
  selector: 'app-create-fonction',
  templateUrl: './create-fonction.component.html',
  styleUrls: ['./create-fonction.component.css']
})
export class CreateFonctionComponent implements OnInit {

  fonction: Fonction = new Fonction();
  submitted = false;

  constructor(private fonctionService: FonctionServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newFonction(): void {
    this.submitted = false;
    this.fonction = new Fonction();
  }

  save() {
    this.fonctionService.createFonction(this.fonction)
      .subscribe(data => console.log(data), error => console.log(error));
    this.fonction = new Fonction();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/fonctions']);
  }

}
