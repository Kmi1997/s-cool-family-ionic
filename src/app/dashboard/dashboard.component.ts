import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuOpenService } from '../shared/services/menuOpen.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

  obsConnected: boolean = false;
  subscriptions : Subscription[] = [];

  menuList: { menuName: string, url: string; }[] = [
    {
      menuName: 'Stages',
      url: '/dashboard/features/internship'
    },
    {
      menuName: 'Inscriptions',
      url: '/dashboard/features/registration'
    },
    {
      menuName: 'Comptes',
      url: '/dashboard/features/admin'
    },
    {
      menuName: 'Paramètres',
      url: '/dashboard/features/param'
    },
  ];


  constructor(private obs: MenuOpenService, private router: Router) { }

  ngOnInit() {

  this.subscriptions.push(this.obs.obsCheckConnected$.subscribe(check => this.obsConnected = check));
    this.router.events.subscribe(() => {
      if (localStorage.getItem('Token')) {
        return this.obs.obsCheckConnected$.next(true);
      }
      else {
        return this.obs.obsCheckConnected$.next(false);
      }
    });
  }





  signOut() {
    this.router.navigate(['/dashboard/connection']).finally(() => {
    localStorage.clear();
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
