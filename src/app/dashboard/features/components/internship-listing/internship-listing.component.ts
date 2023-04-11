import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeleteResponseModel } from 'src/app/dashboard/models/delete-response.model';
import { InternshipModel } from 'src/app/dashboard/models/internship.model';
import { Model } from 'src/app/dashboard/models/Model.model';
import { CallAPIService } from 'src/app/shared/services/calls-api.service';


@Component({
  selector: 'app-internship-listing',
  templateUrl: './internship-listing.component.html'
})


export class InternshipListingComponent {

  @Input() intern: InternshipModel;
  @Output() emitIntern: EventEmitter<DeleteResponseModel<Model[]>> = new EventEmitter<DeleteResponseModel<Model[]>>();
  printUpdate = false;
  printPopover = false;
  popoverMessage : string;
  constructor(private service: CallAPIService) { }

  deleteInternship(id: number) {
    this.service.delete(id, "internship").subscribe((response: DeleteResponseModel<Model[]>) => {
      this.emitIntern.emit(response);
    });
  }

  updateForm(){
    this.printUpdate = !this.printUpdate;
  }

  getClosedButton(value : boolean){
    this.printUpdate = value;
  }

  getPostStatus(value : boolean){
    console.log(value)
    this.printPopover = value;
    // if(value) this.getAll('internship');
  }

  getPostMessage(msg : string){
    this.popoverMessage = msg;
  }
}
