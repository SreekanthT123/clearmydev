import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  private API_URL = 'http://localhost:3000/api/json';

  constructor(private http: HttpClient) {}

  validateJson(json: string) {
    return this.http.post(`${this.API_URL}/validate`, { json });
  }

  fixJson(json: string) {
    return this.http.post(`${this.API_URL}/fix`, { json });
  }
}