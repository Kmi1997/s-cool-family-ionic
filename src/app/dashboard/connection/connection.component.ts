import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Subscription } from 'rxjs';
import { CallAPIService } from 'src/app/shared/services/calls-api.service';
import { ConnectionModel } from '../models/connection.model';
import { Token } from '../models/customType.type';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;
  formValid = false;
  error = false;
  CallApiSubscription = new Subscription;

  constructor(private builder: FormBuilder, private service: CallAPIService, private router: Router) {

    this.formGroup = this.builder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  tryToConnect() {

    const data: ConnectionModel = new ConnectionModel(this.formGroup.controls['username'].value, this.formGroup.controls["password"].value);

    this.service.connection(data).pipe(
      catchError(err => {
        console.log(err);
        this.error = err;
        return err;
      })).subscribe((response: Token) => {
        localStorage.setItem('Token', response.token);
        this.router.navigate(["dashboard/features/internship"]);
      });
  }


  ngOnDestroy(): void {
    this.CallApiSubscription.unsubscribe();
  }
}


