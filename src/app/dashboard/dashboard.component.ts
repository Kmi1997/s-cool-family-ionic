import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { MenuOpenService } from '../shared/services/menuOpen.service';
import { ConnectionComponent } from './connection/connection.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  obsConnected: boolean = false;

  constructor(private obs: MenuOpenService) { }

  ngOnInit() {

    this.obs.obsCheckConnectedFn().subscribe((x: boolean) => this.obsConnected = x);
  }
}