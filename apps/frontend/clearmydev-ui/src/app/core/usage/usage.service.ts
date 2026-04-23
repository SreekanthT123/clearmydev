import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsageService {
  usage = signal<{ limit: number; used: number; remaining: number } | null>(
    null,
  );

  constructor(private http: HttpClient) {}

  loadUsage() {
    this.http.get<any>('/usage').subscribe({
      next: (data) => this.usage.set(data),
      error: () => this.usage.set(null),
    });
  }
}
