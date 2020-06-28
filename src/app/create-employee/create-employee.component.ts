import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FonctionServiceService } from '../fonction-service.service';
import { Fonction } from '../fonction';
import { Observable } from 'rxjs';
import { Service } from '../service';
import { ServiceService } from '../service.service';
import { AffecterEchelon } from '../affecter-echelon';
import { AffecterEchelonServiceService } from '../affecter-echelon-service.service';
import { Echelon } from '../echelon';
import { EchelonServiceService } from '../echelon-service.service';
import { GradeServiceService } from '../grade-service.service';
import { Grade } from '../grade';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  echelon: AffecterEchelon = new AffecterEchelon();
  echelons: Observable<Echelon[]>;
  employee: Employee = new Employee();
  emp: any;
  fonctions: Observable<Fonction[]>;
  services: Observable<Service[]>;
  grades: Observable<Grade[]>;
  submitted = false;
  selectedFile: File;
  Image: any;
  id : number;
  grad:String;

  constructor(private employeeService: EmployeeService,private gradeService: GradeServiceService,private fonctionService: FonctionServiceService,private echService: EchelonServiceService,private echelonService: AffecterEchelonServiceService,private serviceService: ServiceService,
    private router: Router) { }

  ngOnInit() {
    this.fonctions = this.fonctionService.getFonctionsList();
    this.services = this.serviceService.getServicesList();
    this.grades = this.gradeService.getGradeList();
    this.echelons = this.echService.getEchelonsList();
  }
  
  
  onFileChange(event): void{
   
      this.employee.image = '' ;
      var reader = new FileReader();
      reader.onloadend = (e: Event) => {
        this.Image = reader.result;
        this.employee.image = this.Image;
      }
      reader.readAsDataURL(event.target.files[0]);
    
  }
  
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
    
  }

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  save() {
    this.emp = new Employee();
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        console.log(data);
        this.emp = data;
        this.id=this.emp.id;
        this.echelon.employee = this.emp;
        console.log(this.echelon.employee);
      }, error => console.log(error));
      this.sav(); 

 }
  sav() {
    this.employeeService.getEmployee(this.id)
    .subscribe(data => {
      console.log(data);
      
      console.log(this.echelon.employee);
    }, error => console.log(error));
    console.log(this.echelon.employee.id);
    this.echelonService.createEchelon(this.echelon)
    .subscribe(data => console.log(data), error => console.log(error));
  this.echelon = new AffecterEchelon();
  this.employee = new Employee();
  this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  onVal() {
    this.sav();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
