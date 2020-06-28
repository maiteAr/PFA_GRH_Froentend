import { Component, OnInit } from '@angular/core';
import { JourFeriers } from '../jour-feriers';
import { Observable } from 'rxjs';
import { JourFeriersServiceService } from '../jour-feriers-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jours-list',
  templateUrl: './jours-list.component.html',
  styleUrls: ['./jours-list.component.css']
})
export class JoursListComponent implements OnInit {
  
  searchTex: string ='';
  jours: Observable<JourFeriers[]>;

  constructor(private joursService: JourFeriersServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.jours = this.joursService.getJourFeriersList();
  }
}
