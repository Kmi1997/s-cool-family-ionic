import { Component, OnDestroy, OnInit } from '@angular/core';
import { CallAPIService } from 'src/app/shared/services/calls-api.service';
import { IUserHome } from '../models/userHom.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  userPrinted: string = "";

  constructor(private service: CallAPIService) { }

  ngOnInit() {
    this.service.getThisAdmin().subscribe((x: IUserHome) => this.userPrinted = x.username);
  }

  ngOnDestroy(): void {

  }

}
