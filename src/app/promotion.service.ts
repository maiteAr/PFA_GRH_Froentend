import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/promotions';

  constructor(private http: HttpClient) { }

  getPromotion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPromotion(promotion: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, promotion);
  }

  updatePromotion(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePromotion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPromotionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
