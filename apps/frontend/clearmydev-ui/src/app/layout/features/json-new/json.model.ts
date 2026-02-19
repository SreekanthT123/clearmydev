export interface JsonValidateRequest {
  input: string;
}

export interface JsonValidateResponse {
  valid: boolean;
  formatted?: string;
  error?: string;
}