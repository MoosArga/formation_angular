import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerStore } from '../store/spinner.store';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinnerStore: SpinnerStore) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.spinnerStore.setSpinnerTo(true);
    return next.handle(req).pipe(
      finalize(() => {
          this.spinnerStore.setSpinnerTo(false);
      })
    );
  }
}
