import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOpenService } from '../shared/services/menuOpen.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

  obsConnected: boolean = false;
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


  constructor(private obs: MenuOpenService, private route: Router) { }

  ngOnInit() {

    this.menuList.forEach((x: any) => console.log(x.url));
    this.obs.obsCheckConnectedFn().subscribe((x: boolean) => {
      this.obsConnected = x;
    });

    this.route.events.subscribe(() => {
      if (localStorage.length) {
        return this.obs.obsCheckConnected$.next(true);
      }
      else {
        return this.obs.obsCheckConnected$.next(false);
      }
    });

  }





  deconnection() {
    console.log("ok");
    localStorage.clear();
  }

  ngOnDestroy(): void {
    this.obs.obsCheckConnectedFn().unsubscribe();
  }
}