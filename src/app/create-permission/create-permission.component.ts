import { Component, OnInit } from '@angular/core';
import { Permission } from '../permission';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { PermissionService } from '../permission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.css']
})
export class CreatePermissionComponent implements OnInit {
  permission: Permission = new Permission();
  employees: Observable<Employee[]>;
  
  submitted = false;
 

  constructor(private employeeService: EmployeeService, private permissionService: PermissionService,
    private router: Router) { }

  ngOnInit() {
    this.loadProjects();
  }
  
  loadProjects() {
    this.employees = this.employeeService.getEmployeesList();
    
  }
  
  
  newPermission(): void {
    this.submitted = false;
    this.permission = new Permission();
    
  }

  save() {
    
    this.permissionService.createPermission(this.permission)
      .subscribe(data => console.log(data), error => console.log(error));
    this.permission = new Permission();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/permissions']);
  }


}
