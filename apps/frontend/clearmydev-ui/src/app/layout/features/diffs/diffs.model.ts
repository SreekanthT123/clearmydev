export interface ExplainDiffRequest {
  before: string;
  after: string;
  context?: string;
}

export interface ExplainDiffResponse {
  summary: string;
  key_changes: string;
  risk_areas: string;
  what_to_check: string;
}