import { Employee } from './employee';
import { CaisseRetraite } from './caisse-retraite';

export class Retraite {
    id:number;
   salaire_base: number;
    indice_residence: number;
    indice_familialle: number;
     indice_difficulte: number;
    indice_graduation: number;
    salaire_annuel_brut: number;
    salaire_mensuel_brut: number;
    salaire_mensuel_net : number;
    coti_retraite: number;
    coti_mutuelle : number;
    date_retraite:Date;
    type:CaisseRetraite ;
     employee:Employee;
}
