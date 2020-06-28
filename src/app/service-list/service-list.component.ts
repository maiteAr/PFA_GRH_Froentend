import { Component, OnInit } from '@angular/core';
import { Service } from './../service';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Observable<Service[]>;

  constructor(private serviceService: ServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.services = this.serviceService.getServicesList();
  }

  deleteService(id: number) {
    this.serviceService.deleteService(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  serviceDetails(id: number){
    this.router.navigate(['services/details', id]);
  }

  updateService(id: number){
    this.router.navigate(['services/update', id]);
  }


}
