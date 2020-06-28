import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/absences';

  constructor(private http: HttpClient) { }

  getAbsence(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAbsence(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  updateAbsence(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAbsence(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAbsencesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
