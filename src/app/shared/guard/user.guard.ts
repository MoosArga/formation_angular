import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

constructor(private userService: UserService, private route: Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.getById(1).pipe(
      map(user => user && user.role === 'administrateur'),
      tap(isAdmin => {
        if(!isAdmin){
          this.route.navigateByUrl('/error');
        }
      })
    );
  }

}
