import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { PromotionService } from '../promotion.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})
export class CreatePromotionComponent implements OnInit {
  promotion: Promotion = new Promotion();
  employees: Observable<Employee[]>;
  
  submitted = false;
 

  constructor(private employeeService: EmployeeService, private promotionService: PromotionService,
    private router: Router) { }

  ngOnInit() {
    this.loadProjects();
  }
  
  loadProjects() {
    this.employees = this.employeeService.getEmployeesList();
    
  }
  
  
  newPromotion(): void {
    this.submitted = false;
    this.promotion = new Promotion();
    
  }

  save() {
    
    this.promotionService.createPromotion(this.promotion)
      .subscribe(data => console.log(data), error => console.log(error));
    this.promotion = new Promotion();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/promotions']);
  }

}
