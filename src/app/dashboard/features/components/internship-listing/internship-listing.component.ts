import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { DeleteResponseModel } from 'src/app/dashboard/models/delete-response.model';
import { InternshipModel } from 'src/app/dashboard/models/internship.model';
import { Model } from 'src/app/dashboard/models/Model.model';
import { CallAPIService } from 'src/app/shared/services/calls-api.service';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-internship-listing',
  templateUrl: './internship-listing.component.html'
})


export class InternshipListingComponent implements OnDestroy{

  @Input() intern: InternshipModel;
  @Output() emitIntern: EventEmitter<DeleteResponseModel<Model[]>> = new EventEmitter<DeleteResponseModel<Model[]>>();
  printUpdate = false;
  popoverMessage : string;
  colorPopup : boolean;
  printPopup = false;
  subscriptions : Subscription[] = [];
  idUpdatedIntern : number;
  constructor(private service: CallAPIService) { }

  deleteInternship(id: number) {
    this.subscriptions.push(this.service.delete(id, "internship").subscribe((response: DeleteResponseModel<Model[]>) => {
      this.emitIntern.emit(response);
    }));
  }

  updateForm(){
    this.printUpdate = !this.printUpdate;

  }

  getClosedButton(value : boolean){
    this.printUpdate = value;
  }

  getId(id: number){
    this.idUpdatedIntern = id;
  }

  getPostStatus(value : boolean){
    this.printPopup = true;
    if(value) {
      this.subscriptions.push(this.service.getAll('internship').subscribe((response : InternshipModel[]) => {
        this.intern = response.find(intern => intern.id == this.idUpdatedIntern);
      }));
      this.colorPopup = true;

    }else{
      this.colorPopup = false;
    }
    setTimeout(() => {
      this.printPopup = false;
    }, 3500)
  }

  getPostMessage(msg : string){
    this.popoverMessage = msg;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
