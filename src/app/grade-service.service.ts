import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/grades';

  constructor(private http: HttpClient) { }

  getGrade(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGrade(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }

  getGradeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
