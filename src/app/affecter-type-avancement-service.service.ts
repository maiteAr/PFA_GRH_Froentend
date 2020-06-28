import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffecterTypeAvancementServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/affecter_type_avancements';

  constructor(private http: HttpClient) { }

  getEchelon(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEchelon(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  getEchelonsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
