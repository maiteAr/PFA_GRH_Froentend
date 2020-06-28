import { Employee } from './employee';

export class Promotion {
    id: number;
    motif: string;
    status: string;
    type: string;  
    dateDebut: Date;
    dateFin: Date;
    employee: Employee;
}
