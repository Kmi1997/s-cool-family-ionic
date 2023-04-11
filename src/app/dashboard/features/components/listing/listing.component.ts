import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {catchError, Subscription} from 'rxjs';
import { DeleteResponseModel } from 'src/app/dashboard/models/delete-response.model';
import { Model } from 'src/app/dashboard/models/Model.model';
import { CallAPIService } from 'src/app/shared/services/calls-api.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, OnDestroy {

  @Input() route: string;
  dataArray: Model[] = [];
  subscriptions: Subscription[] = [];
  loading = false;
  printButton = false;
  printCard = true;
  printPopover = false;
  popoverMessage : string;
  constructor(private service: CallAPIService) { }

  ngOnInit(): void{

    this.loading = true;
    this.getAll(this.route);

  }

  getAll(route : string){
    this.subscriptions.push(this.service.getAll(route).pipe(
      catchError(error => {
        console.log(error);
        return error;
      })).subscribe((response: Model[]) => {
      console.log(response);
      this.dataArray = response;
      this.loading = false;
    }));
  }

  getEmittedIntern(intern: DeleteResponseModel<Model[]>) {
    this.dataArray = intern.results;
  }

  getClickButton(bool: boolean){
    this.printButton = bool;
    this.printCard = true;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  getPostStatus(value : boolean){
    this.printPopover = value;
    if(value) this.getAll('internship');
  }

  getPostMessage(msg : string){
    this.popoverMessage = msg;
  }
  getClosedButton(value : boolean){
    this.printCard = value;
  }
}
