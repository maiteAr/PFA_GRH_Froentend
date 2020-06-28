import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organigramme',
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.css']
})
export class OrganigrammeComponent implements OnInit {
  logoImage: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
   
    this.logoImage = '../../assets/img/organisation.png';
    //this.count1=this.permissions.forEach.length;
  }

}
