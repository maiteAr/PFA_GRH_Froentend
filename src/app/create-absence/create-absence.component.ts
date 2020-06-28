import { Component, OnInit } from '@angular/core';
import { Absence } from '../absence';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { AbsenceService } from '../absence.service';
import { EmployeeService } from '../employee.service';
import { AbsenceType } from '../absence-type';
import { AbsencetypeServiceService } from '../absencetype-service.service';
import { AnneeServiceService } from '../annee-service.service';
import { Annee } from '../annee';
import { SoldeServiceService } from '../solde-service.service';
import { Solde } from '../solde';
import { JourFeriersServiceService } from '../jour-feriers-service.service';
import { JourFeriers } from '../jour-feriers';

@Component({
  selector: 'app-create-absence',
  templateUrl: './create-absence.component.html',
  styleUrls: ['./create-absence.component.css']
})
export class CreateAbsenceComponent implements OnInit {
  absence: Absence = new Absence();
  absences: Observable<Absence[]>;
  annee: any;
  ab:any;
  employees: Observable<Employee[]>;
  soldes: Observable<Solde[]>;
  types: Observable<AbsenceType[]>;
  jours: Observable<JourFeriers[]>;
  submitted = false;
  selectedFile: File;
  Image: any;
  date :any;
  jour :any;sold:any;
  f=false; r = new Array;

  constructor(private employeeService: EmployeeService,private anneeService: AnneeServiceService,
    private soldeService: SoldeServiceService,private absenceService: AbsenceService,
    private typeService: AbsencetypeServiceService,private jourService: JourFeriersServiceService,
    private router: Router) {  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployeesList();
    this.types = this.typeService.getAbsencesTypeList();
    
    this.jourService.getJourFeriersList().subscribe(res => {
      for(var i in res){
        if(res[i].id_annee.id_annee==(new Date()).getFullYear()){
          this.r.push(res[i].date);
        }
      }
      console.log(this.r);
   });
  }
  
  newAbsence(): void {
    this.submitted = false;
    this.absence = new Absence();
  }

  save() {
    console.log(this.r);
    let date = (new Date(this.absence.dateDebut)).getFullYear();
    this.ab = new Absence();
    this.ab = this.absence;
    this.anneeService.getAnnee(date)
    .subscribe(data => {
      console.log(data);
      let a = (new Date(this.ab.dateFin)).getTime();
      let b = (new Date(this.ab.dateDebut)).getTime();
      
        let days = Math.round((a-b)/(1000*60*60*24));
        if(days < 1) {
          this.submitted = false;
          
          this.jour=" la date debut doit être avant la date fin!";}
          else {
            //this.submitted = true;
            
        console.log(days);
        this.ab.nb_jours= days;
        this.ab.id_annee=data;

        
        this.soldeService.getSoldesList().subscribe( da => {
          console.log(da);
          var d = da;
          console.log(this.ab.id_annee);
          console.log(this.ab.employee);
         for(var element in d){
          console.log(d);
          console.log(d[element].employee);
            if( d[element].employee.id == this.ab.employee.id  && d[element].id_Annee.id == this.ab.id_annee.id && (d[element].solde) >= this.ab.nb_jours){
             
              console.log(d[element].solde);
              var j = d[element].id;
               console.log(j);
              let s = new Solde();
              s.id=j;s.id_Annee=d[element].id_Annee;s.employee=d[element].employee;
              s.solde=(d[element].solde)- this.ab.nb_jours;
              
              
              this.soldeService.updateSolde(j, s)
              .subscribe(data => console.log(data), error => console.log(error));
              this.absenceService.createAbsence(this.ab)
              .subscribe(data => console.log(data), error => console.log(error));
              this.submitted = true;
              
            }else  {
              this.f=false;
              this.submitted = false;
              this.sold = "le solde du jour ouvrable pour cette employée est expiré!";
            }
          };
         
        }, error => console.log(error));
        this.absences = this.absenceService.getAbsencesList();
        this.f=true;this.absence = new Absence();  this.gotoList();
      }
    }, error => console.log(error));
  
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/absences']);
  }

}
