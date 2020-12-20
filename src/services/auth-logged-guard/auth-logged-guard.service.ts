import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAuthService} from '../user-auth/user-auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthLoggedGuardService implements CanActivate{

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {
    return this.userAuthService.user$.pipe(map((user: any) => {
      if (user !== null) {
        return true;
      } else {
        this.router.navigateByUrl('login');
        return false;
      }
    }));
  }
}
