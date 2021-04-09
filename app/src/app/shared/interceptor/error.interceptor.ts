import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthentService } from '../service/authent.service';
import { ErrorMessageStore } from '../store/error-message.store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authentService: AuthentService,
              private errorMessageStore: ErrorMessageStore) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          return this.authentService.connect().pipe(
            switchMap(() => next.handle(req))
          );
        } else if (error.status === 500) {
          this.errorMessageStore.pushError(`Une erreur technique s'est produite. Merci de contacter votre support.`);
          return of({});
        }
        return throwError(error);
      })
    );
  }
}
