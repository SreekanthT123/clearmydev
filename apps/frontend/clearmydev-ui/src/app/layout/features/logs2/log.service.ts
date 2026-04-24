import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExplainLogRequest, ExplainLogResponse } from './log.model';
import { ApiResponse } from '../../../core/models/api-response';

@Injectable({ providedIn: 'root' })
export class LogApi {
  private baseUrl = '/logs';

  constructor(private http: HttpClient) {}

  explain(payload: ExplainLogRequest) {
    return this.http.post<ApiResponse<ExplainLogResponse>>(
      `${this.baseUrl}/explain-log`,
      payload
    );
  }
}
