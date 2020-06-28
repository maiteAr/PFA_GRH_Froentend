import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Permission } from '../permission';
import { PermissionService } from '../permission.service';
import { AbsenceService } from '../absence.service';
import { Absence } from '../absence';
import { Promotion } from '../promotion';
import { PromotionService } from '../promotion.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Observable<Employee[]>;chart = [];
  permissions: Observable<Permission[]>;absences: Observable<Absence[]>;promotion: Observable<Promotion[]>;
  count :number = 0;count2:number = 0;
  count1:number = 0;count3:number = 0;
  

  calendarPlugins = [dayGridPlugin];

  condition1 = "(new Date().getFullYear() == new Date(employee.dateEmbauche).getFullYear()+4) && (employee.fonction.name == 'Secrétaire général')";

  //bar chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  a = [];b = [];c= [];
  public barChartData = [
    {data: this.c, label: "Total of new employees"},
    {data: this.a, label: "Total of absence"},
    {data: this.b, label: 'Total of promotion'}
  ];
  public barChartColors = [
    {
      backgroundColor: ['rgba(0, 204, 204,4)', 'rgba(216, 27, 96,4)', 'rgba(102, 255, 102,7)','rgba(255, 153, 0,5)','rgba(0,0,255,0.3)'],
    },
    {
      backgroundColor: ['rgba(0,0,255,0.3)', 'rgba(255, 153, 0,5)', 'rgba(102, 153, 255,7)','rgba(216, 27, 96,4)','rgba(0, 204, 204,4)'],
    },
  ];
  
  //doughnut chart
  doughnutChartLabels =  []; 
  doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0, 204, 204,4)', 'rgba(216, 27, 96,4)', 'rgba(0,255,0,0.3)','rgba(255, 153, 0,5)','rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private employeeService: EmployeeService,private promotionService: PromotionService,
     private permissionService: PermissionService,private absenceService: AbsenceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.employeeService.getEmployeesList().subscribe(res => {
      
      let r = res.map(res => res.gendre);
      this.doughnutChartLabels = [...new Set(r)];
      this.doughnutChartData = this.doughnutChartLabels.map(value => r.filter(str => str === value).length);

      let year = res.map(res => new Date(res.dateEmbauche).getFullYear());
      this.barChartLabels = [...new Set(year)];
      let count=0;
      for(var v in res){
          if (new Date(res[v].dateEmbauche).getFullYear() == 2020) count++;
      };
      this.c.push(count);
    });
    this.absenceService.getAbsencesList().subscribe(res => {
      let count=0;
      for(var v in res){
          if (new Date(res[v].dateDebut).getFullYear() == 2020) count++;
      };
      this.a.push(count);
    });
    this.promotionService.getPromotionsList().subscribe(res => {
      let count=0;
      for(var v in res){
          if (new Date(res[v].dateDebut).getFullYear() == 2020) count++;
      };
      this.b.push(count);
    });
    

  }

  reloadData() {
    this.absences = this.absenceService.getAbsencesList();
    this.employees = this.employeeService.getEmployeesList();
    this.employeeService.getEmployeesList().subscribe(employees => this.count = employees.length);
   this.permissionService.getPermissionsList().subscribe(permissions => this.count1 = permissions.length);
   this.absenceService.getAbsencesList().subscribe(absences => this.count2 = absences.length);
   this.promotionService.getPromotionsList().subscribe(promotions => this.count3 = promotions.length);
 
    //this.count1=this.permissions.forEach.length;
  }

}
