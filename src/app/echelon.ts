import { Cadre } from './cadre';
import { Grade } from './grade';
import { Echelle } from './echelle';

export class Echelon {
    id_echelon:number;
    lib_echelon: String;
    indice:number;
    id_grade: Grade;
    id_cadre: Cadre;
    id_echelle: Echelle;
    suivant:number;
    precedent:number;
}
