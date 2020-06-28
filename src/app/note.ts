import { Employee } from './employee';
import { Annee } from './annee';

export class Note {
    id:number;
    note:number;
    id_annee:Annee;
    employee: Employee;
}
