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

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  
  search: string ='';
  employees: Observable<Employee[]>;
  annee :any;
  solde: Solde = new Solde();
  soldes: Observable<Solde[]>;

  constructor(private employeeService: EmployeeService,private soldeserv: SoldeServiceService,private anneeService: AnneeServiceService,
    
    private router: Router) { }
    
  ngOnInit() {
    
   this.employees = this.employeeService.getEmployeesList();
    this.soldes = this.soldeserv.getSoldesList();
    this.addSolde();
    
  }
  addSolde(){
    this.annee=new Annee();
    let d = new Date().getFullYear();
    this.annee.id = d;
    console.log(this.annee);
    var s = new Solde();
    s.employee= new Employee();
    s.id_Annee = new Annee();
    let emps:any;let sos:any;
    this.employeeService.getEmployeesList()
    .subscribe(data => {
      emps = data;
      this.soldeserv.getSoldesList()
      .subscribe(data => {
        sos = data;
        console.log(data);
        for(var e in emps){
            for(var v in sos){
            if(emps[e].id != sos[v].employee.id && sos[v].id_Annee.id_annee == d){
              s.employee=emps[e];
              s.solde=22;
              this.anneeService.getAnnee(d)
              .subscribe(data =>{
                s.id_Annee=data;
                this.soldeserv.createSolde(s)
                .subscribe(data => console.log(data), error => console.log(error));
              }, error => console.log(error));
            }
          }
        }
  
      }, error => console.log(error));
    }, error => console.log(error));
       
    
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
