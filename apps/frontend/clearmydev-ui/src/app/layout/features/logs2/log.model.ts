export interface ExplainLogRequest {
  logs: string;
  context?: string;
}

export interface ExplainLogResponse {
  summary: string;
  key_signal: string;
  what_to_check: string;
}