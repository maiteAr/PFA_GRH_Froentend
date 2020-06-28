import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/demandes';

  constructor(private http: HttpClient) { }

  getDemande(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDemande(demande: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, demande);
  }

  updateDemande(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDemande(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDemandesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
