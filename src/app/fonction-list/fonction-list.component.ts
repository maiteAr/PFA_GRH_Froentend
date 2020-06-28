import { Observable } from "rxjs";
import { FonctionServiceService } from './../fonction-service.service';
import { Fonction } from "./../fonction";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fonction-list',
  templateUrl: './fonction-list.component.html',
  styleUrls: ['./fonction-list.component.css']
})
export class FonctionListComponent implements OnInit {
 
  fonctions: Observable<Fonction[]>;

  constructor(private fonctionServiceService: FonctionServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.fonctions = this.fonctionServiceService.getFonctionsList();
  }

  deleteFonction(id: number) {
    this.fonctionServiceService.deleteFonction(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  fonctionDetails(id: number){
    this.router.navigate(['fonctions/details', id]);
  }

  updateFonction(id: number){
    this.router.navigate(['fonctions/update', id]);
  }

}
