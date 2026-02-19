import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../../core/models/api-response';
import { ExplainIncidentResponse } from './incident.model';

@Injectable({ providedIn: 'root' })
export class ExplainIncidentService {
  private api_url = '/incidents';

  constructor(private http: HttpClient) {}

  explainIncident(payload: {
    description: string;
    logs?: string;
    errors?: string;
    changes?: string;
    context?: string;
  }) {
    return this.http.post<ApiResponse<ExplainIncidentResponse>>(`${this.api_url}/explain-incident`, payload);
  }
}
