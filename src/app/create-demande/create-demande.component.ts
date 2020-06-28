import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DemandeService } from '../demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-demande',
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.css']
})
export class CreateDemandeComponent implements OnInit {

  demande: Demande = new Demande();
  employees: Observable<Employee[]>;
  
  submitted = false;
  selectedFile: File;
  Image: any;

  constructor(private employeeService: EmployeeService, private demandeService: DemandeService,
    private router: Router) { }

  ngOnInit() {
    this.loadProjects();
  }
  
  loadProjects() {
    this.employees = this.employeeService.getEmployeesList();
    
  }
  
  
  newDemande(): void {
    this.submitted = false;
    this.demande = new Demande();
    
  }

  save() {
    
    this.demandeService.createDemande(this.demande)
      .subscribe(data => console.log(data), error => console.log(error));
    this.demande = new Demande();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    
    this.router.navigate(['/demandes']);
  }

}
