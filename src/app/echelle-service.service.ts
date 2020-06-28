import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EchelleServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/echelles';

  constructor(private http: HttpClient) { }

  getEchelle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEchelle(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  getEchellesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
