import { Component, OnInit } from '@angular/core';
import { AffecterEchelon } from '../affecter-echelon';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AffecterEchelonServiceService } from '../affecter-echelon-service.service';

@Component({
  selector: 'app-echellon-form',
  templateUrl: './echellon-form.component.html',
  styleUrls: ['./echellon-form.component.css']
})
export class EchellonFormComponent implements OnInit {

  echelon: AffecterEchelon = new AffecterEchelon();
  employee: any ;
  id :number ;
  submitted = false;
 

  constructor(private employeeService: EmployeeService,private echelonService: AffecterEchelonServiceService,
    private router: Router) { }

  ngOnInit() {
    
    this.loadProjects();
  }
  
  loadProjects() {

    this.employee = this.employeeService.getEmployee(this.id);
    
  }
  
  newAbsence(): void {
    this.submitted = false;
    this.echelon = new AffecterEchelon();
    
  }

  save() {
    this.echelonService.createEchelon(this.echelon)
      .subscribe(data => console.log(data), error => console.log(error));
    this.echelon = new AffecterEchelon();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
