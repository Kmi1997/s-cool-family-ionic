import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {RegistrationModel} from "../../../models/registration.model";
import {CallAPIService} from "../../../../shared/services/calls-api.service";
import {DeleteResponseModel} from "../../../models/delete-response.model";
import {Model} from "../../../models/Model.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-registration-listing',
  templateUrl: './registration-listing.component.html',
  styleUrls: ['./registration-listing.component.scss'],
})
export class RegistrationListingComponent  implements OnInit, OnDestroy {

  @Input() registration :RegistrationModel
  @Output() emitRegistration : EventEmitter<DeleteResponseModel<Model[]>> = new EventEmitter<DeleteResponseModel<Model[]>>();
  printUpdate = false;
  popoverMessage : string;
  colorPopup : boolean;
  printPopup = false;
  idUpdatedIntern : number;
  subscriptions : Subscription[] = [];
  constructor(private service: CallAPIService) { }

  ngOnInit() {

  }
  updateForm(){
    this.printUpdate = !this.printUpdate;
  }
  deleteRegistration(id: number) {
    this.subscriptions.push(this.service.delete(id, "registration").subscribe((response: DeleteResponseModel<Model[]>) => {
      this.emitRegistration.emit(response);
    }));
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
        this.subscriptions.push(this.service.getAll('registration').subscribe((response : RegistrationModel[]) => {
          this.registration = response.find(intern => intern.id == this.idUpdatedIntern);
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
