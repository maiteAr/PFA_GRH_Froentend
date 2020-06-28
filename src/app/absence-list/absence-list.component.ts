import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../absence';
import { AbsenceService } from '../absence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit {
  searchText: string ='';
  absences: Observable<Absence[]>;demande: Absence =new Absence();
  dat = new Date();

  constructor(private absenceService: AbsenceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.absences = this.absenceService.getAbsencesList();
  }

 isExpirationExpired(product) : boolean {
 
 if(new Date(product).getTime() < new Date().getTime())
  return true;
  else return false;
}

  deleteAbsence(id: number) {
    this.absenceService.deleteAbsence(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  absenceDetails(id: number){
    this.router.navigate(['absences/details', id]);
  }

  updateAbsence(id: number){
    this.router.navigate(['absences/update', id]);
  }
  

}
