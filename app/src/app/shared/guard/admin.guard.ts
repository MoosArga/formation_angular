import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.userService.findCurrentUser().pipe(
      // map(user => (!!user && user.role === 'administrateur') || this.router.parseUrl('/not-authorized'))
      map(user => {
        let result: boolean | UrlTree = !!user && user.role === 'administrateur';
        if (!result) {
          result = this.router.parseUrl('/not-authorized');
        }
        return result;
      })
    );
  }

}
