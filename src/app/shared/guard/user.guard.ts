import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserServiceService } from '../service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {


  constructor(private userService: UserServiceService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.userService.getUserById(1).pipe(
        map(user => user && user.role === 'administrateur' ),
        tap(isAdmin => {
          if(!isAdmin) {
            this.router.navigate(['error']);
          }
        }));
  }
}
