import { Employee } from './employee';

export class Demande {
    id: number;
    motif: string;
    status: string;
    type: string;    
    employee: Employee;
}
