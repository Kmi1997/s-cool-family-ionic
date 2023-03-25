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

  @Input() paramService: string;
  dataArray: Model[] = [];
  subscriptions: Subscription[] = [];

  constructor(private service: CallAPIService) { }

  ngOnInit(): void {

    console.log(this.paramService);
    this.subscriptions.push(this.service.getAll(this.paramService).subscribe((response: Model[]) => {
      console.log(response);
      this.dataArray = response;
    }));

  }

  deleteInternship(id: number) {
    this.subscriptions.push(this.service.delete(id, this.paramService).subscribe((response: DeleteResponseModel<Model[]>) => {
      this.dataArray = response.results;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
