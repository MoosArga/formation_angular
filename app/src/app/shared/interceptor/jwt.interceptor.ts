import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ConnectedUserStore } from '../store/connected-user.store';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  tokenJwt$: Observable<string>;

  constructor(connectedUserStore: ConnectedUserStore) {
    this.tokenJwt$ = connectedUserStore.getTokenJwt$();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.tokenJwt$.pipe(
      map(token => {
        let request = req;
        if (!!token) {
          request = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
          });
        }
        return request;
      }),
      switchMap(request => next.handle(request))
    );
  }
}
