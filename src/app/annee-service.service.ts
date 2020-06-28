import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnneeServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/annees';

  constructor(private http: HttpClient) { }

  getAnnee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAnnee(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  updateAnnee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnnee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnneesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
