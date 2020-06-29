import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { SoldeServiceService } from '../solde-service.service';
import { Solde } from '../solde';
import { Annee } from '../annee';
import { AnneeServiceService } from '../annee-service.service';
import { AffecterEchelon } from '../affecter-echelon';
import { AffecterEchelonServiceService } from '../affecter-echelon-service.service';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  
  search: string ='';
  employees: Observable<Employee[]>;
  annee :any;soldes: Observable<Solde[]>;
  echelle: AffecterEchelon=new AffecterEchelon();
  echelles: Observable<AffecterEchelon[]>;

  

  constructor(private employeeService: EmployeeService,private affectechelon: AffecterEchelonServiceService,private soldeserv: SoldeServiceService,private anneeService: AnneeServiceService,
    
    private router: Router) { }
    
  ngOnInit() {
    
   this.employees = this.employeeService.getEmployeesList();
    this.soldes = this.soldeserv.getSoldesList();
    this.affectechelon.getEchelonsList().subscribe(data => {
      this.echelles=data;
    });
    
    
  }

  getEchelle(id){
    console.log(id);
    let f = new Array();
      for(var i in this.echelles){
        this.echelle= new AffecterEchelon();
        if( this.echelles[i].employee.id === id){
            f.push(this.echelles[i]);
        }
      }
      this.echelle= f.pop();
    console.log(this.echelle.id_echelon.id_echelle.id_echelle);
    return this.echelle.id_echelon.id_echelle.id_echelle;
  }
  getEchelon(id){
    console.log(id);
    let f = new Array();
      for(var i in this.echelles){
        this.echelle= new AffecterEchelon();
        if( this.echelles[i].employee.id === id){
            f.push(this.echelles[i]);
        }
      }
      this.echelle= f.pop();
    console.log(this.echelle.id_echelon.id_echelon);
    return this.echelle.id_echelon.id_echelon;
  }
  

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.employees = this.employeeService.getEmployeesList(); 
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}
