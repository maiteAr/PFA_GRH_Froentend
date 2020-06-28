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
  annee :any;soldes: Observable<Solde[]>;
  

  constructor(private employeeService: EmployeeService,private soldeserv: SoldeServiceService,private anneeService: AnneeServiceService,
    
    private router: Router) { }
    
  ngOnInit() {
    
   this.employees = this.employeeService.getEmployeesList();
    this.soldes = this.soldeserv.getSoldesList();
    
    
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
