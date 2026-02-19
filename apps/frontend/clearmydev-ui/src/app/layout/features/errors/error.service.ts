import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Explanation } from './error.model';
import { ApiResponse } from '../../../core/models/api-response';

@Injectable({
  providedIn: 'root',
})
export class ExplainService {
//   private API_URL = 'https://explain-my-error.onrender.com/api/explain-error';
  private API_URL = '/errors';

  constructor(private http: HttpClient) {}

  explainError(errorText: string, framework: string) {
    console.log("inside fronend")
    return this.http.post<ApiResponse<Explanation>>(`${this.API_URL}/explain-error`, {
      errorText,
      framework,
    });
  }
}
