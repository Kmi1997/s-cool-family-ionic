import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuOpenService } from '../services/menuOpen.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private router: Router, private obs: MenuOpenService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('Token')) {

      this.obs.obsCheckConnectedFn().next(true);
      return true;

    }
    else {

      this.obs.obsCheckConnectedFn().next(false);
      this.router.navigate(['/dashboard/connection']);
      return false;

    };
  }

}
