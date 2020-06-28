import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Promotion } from '../promotion';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {

  promotions: Observable<Promotion[]>;
  promotion: Promotion =new Promotion();
 

  constructor(private promotionService: PromotionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.promotions = this.promotionService.getPromotionsList();
  }
  manualUpdateEvent(value: boolean,id:number): void {
    //this.manualUpdate = value;
    this.reloadData();
    if(value==true){
      this.promotionService.getPromotion(id)
        .subscribe(data => {
          console.log(data);
          this.promotion = data;
        });
        this.promotion.id=id;
        this.promotion.status ="approuvé";

        this.promotionService.updatePromotion(id,this.promotion).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
    else{
      this.promotionService.getPromotion(id)
        .subscribe(data => {
          console.log(data);
          this.promotion = data;
        });
        this.promotion.id=id;
        this.promotion.status ="demandé";

        this.promotionService.updatePromotion(id,this.promotion).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
   
}


  deletePromotion(id: number) {
    this.promotionService.deletePromotion(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  promotionDetails(id: number){
    this.router.navigate(['promotions/details', id]);
  }

  updatePromotion(id: number){
    this.router.navigate(['promotions/update', id]);
  }

}
