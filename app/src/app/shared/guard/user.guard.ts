import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.userService.getUserById(1).pipe(
      // map(user => (user && user.role === 'administrateur') || this.router.parseUrl('/error'))
      map(user => user && user.role === 'administrateur' ? true : this.router.parseUrl('/error'))
    );
  }

}
