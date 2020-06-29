import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Promotion } from '../promotion';
import { PromotionService } from '../promotion.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { AffecterTypeAvancementServiceService } from '../affecter-type-avancement-service.service';
import { AffecterEchelonServiceService } from '../affecter-echelon-service.service';
import { AffecterEchelon } from '../affecter-echelon';
import { NoteServiceService } from '../note-service.service';
import { EchelonServiceService } from '../echelon-service.service';
import { Echelon } from '../echelon';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {
  echelon: AffecterEchelon = new AffecterEchelon();
  employees: Observable<Employee[]>;
  employee: Employee =new Employee();
  affecte: Echelon= new Echelon();
  note:any;notes: any[];s=0;
  promotions:Observable<Promotion[]>;
  promotion: Promotion =new Promotion();
  proms:any [];ids=new Array();
  echelle: AffecterEchelon=new AffecterEchelon();
  echelles: Observable<AffecterEchelon[]>;

  constructor(private employeeService: EmployeeService, private typeService : AffecterTypeAvancementServiceService,
    private affectechelon: AffecterEchelonServiceService,private echelonService: EchelonServiceService,
    private noteService: NoteServiceService,private promotionService: PromotionService,
    private router: Router) {}

  ngOnInit() {
    this.promotions = this.promotionService.getPromotionsList();
    
    this.noteService.getNoteList().subscribe(data => { 
      this.notes=data; 
    });
    this.promotionService.getPromotionsList().subscribe(data => {
      this.proms= data;
      for(var i in data){
        this.ids.push(data[i].employee.id);  
        }
    });
    this.affectechelon.getEchelonsList().subscribe(data => {
      this.echelles=data;
    });
    this.reloadData();
    
  }

  monthsDiff(d1: Date, d2 : Date) {
    let years = d2.getFullYear() - new Date(d1).getFullYear();
    //console.log(years);
    let months =(years * 12) + (new Date(d2).getMonth() - new Date(d1).getMonth()) ;
    //console.log(months);
    return months;
  }
  getM(m:number){
    let M =0;
    switch (m) {
      case 12:M=1;break;
      case 18:M=1.5;break;
      case 24:M=2;break;
      case 30:M=2.5;break;
      case 36:M=3;break;
      case 42:M=3.5
      case 48:M=4;break;
      case 54:M=4.5
      case 60:M=5;break;
      case 66:M=5.5;break;
    }
    return M;
  }
  
  getNoteMoy(x: number,m:number){
    let note=0;
    let moy;
    let notes= new Array();
    for(var i in this.notes){
      if(this.notes[i].employee.id === x){
        notes.push(this.notes[i].note);
      }
    } 
    this.s= notes.length;
    if(this.s==m){
      for(var n in notes){
        note=note+notes[n];
      }
      moy = note/m;
    }
    this.note=moy;
    return moy;
  }


  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
    this.affectechelon.getEchelonsList().subscribe( data => {
     this.typeService.getEchelonsList().subscribe(d => {
      
      for (var f in data){
              for(let t in d){
              if(d[t].id_echelon.id_echelon == data[f].id_echelon.id_echelon){
                
                if(d[t].type.nb_mois == this.monthsDiff(data[f].date_affectation,new Date())){
                  let M = this.getM(d[t].type.nb_mois);
                  let m = this.getNoteMoy(data[f].employee.id,M);
                  
                  if( (m >= d[t].type.note_min && m <= d[t].type.note_max) || (m >= d[t].type.note_min && m <= d[t].type.note_max) || (m >= d[t].type.note_min && m <= d[t].type.note_max) ){
                    console.log(data[f].employee.id);
                    this.promotion=new Promotion(); 
                    this.promotion.employee=data[f].employee;
                    
                    if(data[f].id_echelon.precedent == -1 && Number(data[f].id_echelon.lib_echelon)!=1){
                      this.promotion.type="avancement par ancienneté Echelle";
                      this.promotion.nv=1;
                    }else {
                      this.promotion.type="avancement par ancienneté Echelon";
                      this.promotion.nv=Number(data[f].id_echelon.lib_echelon)+1;
                    }
                    
                    this.promotion.note_moyenne=m;
                    
                    
                    this.promotion.ac=Number(data[f].id_echelon.lib_echelon);
                    console.log( this.promotion.employee);
                    console.log("new affectation");
                    this.save(this.promotion.employee.id,this.promotion.ac,this.promotion.note_moyenne);
                  }
                  else console.log("no moy to be affected");
              }
            }
              else console.log("no affectation");
            }
          }
        });});
  }

  save(n:number,j:number,k:number) {
    this.promotion.status="demandé";
    console.log(this.promotion);
    
    if(this.proms.length!=0){

      if(this.ids.includes(n)){
        console.log("exist");
      }else {

      
      console.log("not exist");
      console.log(this.promotion);
      this.promotionService.createPromotion(this.promotion)
      .subscribe(data => console.log(data), error => console.log(error));}
      
    }else 
      if (this.proms.length==0){
          console.log(this.promotion);
          this.promotionService.createPromotion(this.promotion)
          .subscribe(data => console.log(data), error => console.log(error));
    }
    this.promotion = new Promotion();
    this.promotions = this.promotionService.getPromotionsList();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/promotions']);
  }

  manualUpdateEvent(value: boolean,id:number): void {
    //this.manualUpdate = value;
    this.promotions=this.promotionService.getPromotionsList();
    if(value==true){
      this.promotionService.getPromotion(id)
        .subscribe(data => {
          console.log(data);
          this.promotion = data;
        });
        this.promotion.id=id;
        this.echelonService.getEchelon(this.promotion.nv).subscribe(d => {
          console.log(d);
          this.affecte=d;
        });
        this.promotion.status ="approuvé";

        this.promotionService.updatePromotion(id,this.promotion).subscribe(data => {
         
          this.echelon.employee=this.promotion.employee;
          
          this.echelon.id_echelon=this.affecte;
          this.echelon.date_affectation=new Date();
          this.echelon.note_moyenne= this.promotion.note_moyenne;
          this.affectechelon.createEchelon(this.echelon).subscribe(data => console.log(data));
          this.affecte = new Echelon();
          this.promotion = new Promotion();
          this.promotions =this.promotionService.getPromotionsList();
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
          this.promotion= new Promotion();
          this.promotions=this.promotionService.getPromotionsList();
        },
        error => console.log(error));
    }
} 
updatePromotion(id: number){
  this.router.navigate(['promotions/update', id]);
}
deletePromotion(id: number) {
  this.promotionService.deletePromotion(id)
    .subscribe(
      data => {
        console.log(data);
        this.promotions=this.promotionService.getPromotionsList();
      },
      error => console.log(error));
}
getEchelle(id,v){
  console.log(id);
  console.log(v);
    for(var i in this.echelles){
      this.echelle= new AffecterEchelon();
      if( this.echelles[i].employee.id === id && Number( this.echelles[i].id_echelon.lib_echelon) == v){
        this.echelle= this.echelles[i];break;
      }
    }
  console.log(this.echelle.id_echelon.id_echelle.id_echelle);
  return this.echelle.id_echelon.id_echelle.id_echelle;
}
}
