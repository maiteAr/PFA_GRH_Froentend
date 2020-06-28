import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  id: number;
  service: Service;
  constructor(private route: ActivatedRoute,private router: Router,
    private fonctionService: ServiceService) { }
    
  ngOnInit() {
    this.service = new Service();

    this.id = this.route.snapshot.params['id'];
    
    this.fonctionService.getService(this.id)
      .subscribe(data => {
        console.log(data)
        this.service = data;
      }, error => console.log(error));
  }

  updateService() {
    this.fonctionService.updateService(this.id, this.service)
      .subscribe(data => console.log(data), error => console.log(error));
    this.service = new Service();
    this.gotoList();
  }

  onSubmit() {
    this.updateService();    
  }

  gotoList() {
    this.router.navigate(['/services']);
  }
}
