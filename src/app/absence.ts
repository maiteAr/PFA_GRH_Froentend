import { Employee } from './employee';
import { AbsenceType } from './absence-type';
import { Annee } from './annee';
export class Absence {
    id: number;
    type: AbsenceType;
    dateDebut: Date;
    dateFin: Date;
    id_annee: Annee;
    nb_jours: number;
    employee: Employee;
}

