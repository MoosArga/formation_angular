import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserServiceService } from '../../service/User/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private service: UserServiceService, private router: Router){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.service.searchUserById(1).pipe(
        //map(user => user && user.role === 'administrateur' ? true : this.router.parseUrl('/error'))
        //map(user => (user && user.role === 'administrateur') || this.router.parseUrl('/error'))
        map(user => user && user.role === 'administrateur'),
        tap(isAdmin => {
          if(!isAdmin){
            this.router.navigateByUrl('/error');
          }
        })
      );
  }

}
