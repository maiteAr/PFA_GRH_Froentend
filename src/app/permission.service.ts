import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/permissions';

  constructor(private http: HttpClient) { }

  getPermission(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPermission(permission: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, permission);
  }

  updatePermission(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePermission(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPermissionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
