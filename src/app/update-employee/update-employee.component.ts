import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Fonction } from '../fonction';
import { Observable } from 'rxjs';
import { FonctionServiceService } from '../fonction-service.service';
import { ServiceService } from '../service.service';
import { Service } from '../service';
import { AffecterEchelon } from '../affecter-echelon';
import { Echelon } from '../echelon';
import { Grade } from '../grade';
import { GradeServiceService } from '../grade-service.service';
import { EchelonServiceService } from '../echelon-service.service';
import { AffecterEchelonServiceService } from '../affecter-echelon-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  echelon: AffecterEchelon = new AffecterEchelon();
  echelons: Observable<Echelon[]>;
  grades: Observable<Grade[]>;
  id: number;
  employee: Employee;
  fonctions: Observable<Fonction[]>;
  services: Observable<Service[]>;
  selectedFile: File;
  Image: any;emp: Employee;
  

  constructor(private route: ActivatedRoute,private router: Router,private echService: EchelonServiceService,private echelonService: AffecterEchelonServiceService,private gradeService: GradeServiceService,private fonctionService: FonctionServiceService,private serviceService: ServiceService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.loadFonctions();
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
        this.emp= data;
      }, error => console.log(error));
  }
  loadFonctions() {
    this.fonctions = this.fonctionService.getFonctionsList();
    this.services = this.serviceService.getServicesList();
    this.grades = this.gradeService.getGradeList();
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

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
