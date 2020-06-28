import { Component, OnInit } from '@angular/core';
import { Fonction } from '../fonction';
import { Router, ActivatedRoute } from '@angular/router';
import { FonctionServiceService } from '../fonction-service.service';

@Component({
  selector: 'app-fonction-details',
  templateUrl: './fonction-details.component.html',
  styleUrls: ['./fonction-details.component.css']
})
export class FonctionDetailsComponent implements OnInit {
  id: number;
  fonction: Fonction;

  constructor(private route: ActivatedRoute,private router: Router,
    private fonctionServiceService: FonctionServiceService) { }

    ngOnInit() {
      this.fonction = new Fonction();
  
      this.id = this.route.snapshot.params['id'];
      
      this.fonctionServiceService.getFonction(this.id)
        .subscribe(data => {
          console.log(data)
          this.fonction = data;
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['fonctions']);
    }
}