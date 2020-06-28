import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fonction } from '../fonction';
import { FonctionServiceService } from '../fonction-service.service';

@Component({
  selector: 'app-update-fonction',
  templateUrl: './update-fonction.component.html',
  styleUrls: ['./update-fonction.component.css']
})
export class UpdateFonctionComponent implements OnInit {
  id: number;
  fonction: Fonction;

  constructor(private route: ActivatedRoute,private router: Router,
    private fonctionService: FonctionServiceService) { }
    
  ngOnInit() {
    this.fonction = new Fonction();

    this.id = this.route.snapshot.params['id'];
    
    this.fonctionService.getFonction(this.id)
      .subscribe(data => {
        console.log(data)
        this.fonction = data;
      }, error => console.log(error));
  }

  updateFonction() {
    this.fonctionService.updateFonction(this.id, this.fonction)
      .subscribe(data => console.log(data), error => console.log(error));
    this.fonction = new Fonction();
    this.gotoList();
  }

  onSubmit() {
    this.updateFonction();    
  }

  gotoList() {
    this.router.navigate(['/fonctions']);
  }

}
