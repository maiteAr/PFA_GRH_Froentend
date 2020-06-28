import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JourFeriersServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/jour_feriers';

  constructor(private http: HttpClient) { }

  getJourFeriers(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJourFeriers(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  getJourFeriersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
