import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from '../permission';
import { Observable } from 'rxjs';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {

  permissions: Observable<Permission[]>;demande: Permission =new Permission();
 

  constructor(private permissionService: PermissionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.permissions = this.permissionService.getPermissionsList();
  }
  manualUpdateEvent(value: boolean,id:number): void {
    //this.manualUpdate = value;
    this.reloadData();
    if(value==true){
      this.permissionService.getPermission(id)
        .subscribe(data => {
          console.log(data);
          this.demande = data;
        });
        this.demande.id=id;
        this.demande.status ="approuvé";

        this.permissionService.updatePermission(id,this.demande).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
    else{
      this.permissionService.getPermission(id)
        .subscribe(data => {
          console.log(data);
          this.demande = data;
        });
        this.demande.id=id;
        this.demande.status ="demandé";

        this.permissionService.updatePermission(id,this.demande).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
   
}


  deletePermission(id: number) {
    this.permissionService.deletePermission(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  permissionDetails(id: number){
    this.router.navigate(['permissions/details', id]);
  }

  updatePermission(id: number){
    this.router.navigate(['permissions/update', id]);
  }

}
