import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/notes';

  constructor(private http: HttpClient) { }

  getNote(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createNote(absence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, absence);
  }
  updateNote(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getNoteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
