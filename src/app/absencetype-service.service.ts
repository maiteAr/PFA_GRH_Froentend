import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AbsencetypeServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/absence_types';

  constructor(private http: HttpClient) { }

  getAbsenceType(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAbsenceType(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  updateAbsenceType(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAbsenceType(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAbsencesTypeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
