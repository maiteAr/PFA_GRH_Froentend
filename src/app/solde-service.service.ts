import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SoldeServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/soldes';

  constructor(private http: HttpClient) { }

  getSolde(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSolde(service: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, service);
  }

  updateSolde(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSolde(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSoldesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
