export interface ExplainIncidentRequest {
  description: string;
  logs?: string;
  errors?: string;
  changes?: string;
  context?: string;
}

export interface ExplainIncidentResponse {
  summary: string;
  likely_cause: string;
  impact: string;
  next_step: string;
}
