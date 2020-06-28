import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadreServiceService {
  
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/cadres';

  constructor(private http: HttpClient) { }

  getCadre(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCadre(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  updateCadre(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCadre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCadresList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
