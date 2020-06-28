import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaisseServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/caisse_retraites';

  constructor(private http: HttpClient) { }

  getCaisse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCaisse(demande: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, demande);
  }

  getCaissesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
