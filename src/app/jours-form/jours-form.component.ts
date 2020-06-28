import { Component, OnInit } from '@angular/core';
import { JourFeriers } from '../jour-feriers';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JourFeriersServiceService } from '../jour-feriers-service.service';
import { AnneeServiceService } from '../annee-service.service';
import { Annee } from '../annee';

@Component({
  selector: 'app-jours-form',
  templateUrl: './jours-form.component.html',
  styleUrls: ['./jours-form.component.css']
})
export class JoursFormComponent implements OnInit {

  jour: JourFeriers = new JourFeriers();
  annees: Observable<Annee[]>;
  j:any;
  submitted = false;
  
  constructor(private jourService: JourFeriersServiceService, private anneeService: AnneeServiceService,
    private router: Router) { }

  ngOnInit() {
    this.loadProjects();
  }
  
  loadProjects() {
    this.annees = this.anneeService.getAnneesList();
  }
  
  newDemande(): void {
    this.submitted = false;
    this.jour = new JourFeriers();
  }

  save() {
    var d = (new Date(this.jour.date)).getFullYear();
    console.log(d);
    this.j = new JourFeriers();
    this.j=this.jour;
    this.anneeService.getAnnee(d)
      .subscribe(data => {
        console.log(data);
       
        this.j.id_annee=data;
        console.log(this.j);
        this.jourService.createJourFeriers(this.j)
      .subscribe(data => console.log(data), error => console.log(error));
      this.jour = new JourFeriers();
      this.gotoList();
      }
       , error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/jour_feriers']);
  }

}
