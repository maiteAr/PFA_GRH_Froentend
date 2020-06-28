import { Cadre } from './cadre';
import { Grade } from './grade';
import { Echelle } from './echelle';
import { Employee } from './employee';

export class Reclassement {
    id:number;
    id_cadre:Cadre;
    id_grade:Grade;
    rec_exam:number;
    date_reclassement:Date;
    employee:Employee;
    id_echelle:Echelle;

}
