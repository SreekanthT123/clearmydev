import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  const token = localStorage.getItem('token');

  const apiReq = req.clone({
    url: `${environment.apiBaseUrl}${req.url}`,
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
  });

  // if (token) {
  //   const cloned = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return next(cloned);
  // }
  return next(apiReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        auth.logout();
        router.navigate(['/login']);
      }

      return throwError(() => error);
    }),
  );
};
