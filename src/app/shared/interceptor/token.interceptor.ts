import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('Token') !== null) {
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('Token'))
      });
      return next.handle(clone).pipe(
        catchError(error => {
          console.log(error);
          if (error.status === 401) {
            localStorage.clear();
            return throwError('Session expirée');
          };

          return throwError('Erreur');
        })
      );
    };
    return next.handle(request);
  };
};

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};
