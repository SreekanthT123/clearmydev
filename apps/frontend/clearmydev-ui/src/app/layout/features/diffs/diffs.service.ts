import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExplainDiffResponse } from './diffs.model';
import { ApiResponse } from '../../../core/models/api-response';

@Injectable({ providedIn: 'root' })
export class ExplainDiffService {
  private api_url = '/diffs';

  constructor(private http: HttpClient) {}

  expalinDiff(before: string, after: string, context: string) {
    return this.http.post<ApiResponse<ExplainDiffResponse>>(`${this.api_url}/explain-diff`, {
      before,
      after,
      context,
    });
  }
}
