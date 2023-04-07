import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private service: CallAPIService) { }

  ngOnInit(): void {

    this.loading = true;
    this.subscriptions.push(this.service.getAll(this.route).subscribe((response: Model[]) => {
      console.log(response);
      this.dataArray = response;
      this.loading = false;
    }));

  }

  getEmittedIntern(intern: DeleteResponseModel<Model[]>) {
    this.dataArray = intern.results;
  }

  getClickButton(bool: boolean){
    console.log(bool)
    this.printButton = bool;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
