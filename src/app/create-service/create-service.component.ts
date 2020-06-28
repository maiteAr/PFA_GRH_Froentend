import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  service: Service = new Service();
  submitted = false;

  constructor(private serviceService: ServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newService(): void {
    this.submitted = false;
    this.service = new Service();
  }

  save() {
    this.serviceService.createService(this.service)
      .subscribe(data => console.log(data), error => console.log(error));
    this.service = new Service();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/services']);
  }

}
