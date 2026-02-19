import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../../core/models/api-response';
import { JsonValidateResponse } from './json.model';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  private API_URL = '/json';

  constructor(private http: HttpClient) {}

  validateJson(json: string) {
    return this.http.post<ApiResponse<JsonValidateResponse>>(`${this.API_URL}/validate-json`, { json });
  }

  fixJson(json: string) {
    return this.http.post<ApiResponse<JsonValidateResponse>>(`${this.API_URL}/fix-with-ai`, { json });
  }
}
