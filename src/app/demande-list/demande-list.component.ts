import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../demande.service';
import { Demande } from '../demande';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {
  demandes: Observable<Demande[]>;
  demande: Demande =new Demande();
  

  constructor(private demandeService: DemandeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    
  }

  reloadData() {
    this.demandes = this.demandeService.getDemandesList();
    
  }

  manualUpdateEvent(value: boolean,id:number): void {
    //this.manualUpdate = value;
    this.reloadData();
    if(value==true){
      this.demandeService.getDemande(id)
        .subscribe(data => {
          console.log(data);
          this.demande = data;
        });
        this.demande.id=id;
        this.demande.status ="approuvé";

        this.demandeService.updateDemande(id,this.demande).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
    else{
      this.demandeService.getDemande(id)
        .subscribe(data => {
          console.log(data);
          this.demande = data;
        });
        this.demande.id=id;
        this.demande.status ="demandé";

        this.demandeService.updateDemande(id,this.demande).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
   
}

  deleteDemande(id: number) {
    this.demandeService.deleteDemande(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  demandeDetails(id: number){
    this.router.navigate(['demandes/details', id]);
  }

  updateDemande(id: number){
    this.router.navigate(['demandes/update', id]);
  }
  
}
