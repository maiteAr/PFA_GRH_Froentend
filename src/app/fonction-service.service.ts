import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FonctionServiceService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/fonctions';

  constructor(private http: HttpClient) { }

  getFonction(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFonction(fonction: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, fonction);
  }

  updateFonction(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFonction(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFonctionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
