import { Employee } from './employee';

export class Permission {
    id: number;
    motif: string;
    status: string;
    type: string;  
    dateDebut: Date;
    dateFin: Date;
    dateReprise: Date;  
    employee: Employee;
}
