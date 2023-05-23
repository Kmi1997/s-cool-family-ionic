import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {RegistrationModel} from "../../../models/registration.model";
import {catchError, Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CallAPIService} from "../../../../shared/services/calls-api.service";
import {InternshipModel} from "../../../models/internship.model";
import {RegexPhone, regexPhoneValidator} from "../../../../shared/Validators/phoneNumber.validator";
import {InternshipPayload} from "../../../models/internship.payload";

@Component({
  selector: 'app-registration-add',
  templateUrl: './registration-add.component.html',
  styleUrls: ['./registration-add.component.scss'],
})
export class RegistrationAddComponent  implements OnInit, OnDestroy {
  @Output() closeCard : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() postStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() postMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitId : EventEmitter<number> = new EventEmitter<number>();

  @Input() title = 'card';
  @Input() addOrPatch ="add";
  @Input() registration : RegistrationModel;
  subscriptions : Subscription[] = [];
  loading = false;
  form : FormGroup
  internships: InternshipModel[] = [];
  constructor(private builder : FormBuilder, private service: CallAPIService) {
    this.form = this.builder.group({
      internshipId: new FormControl(undefined, Validators.required),
      healthIssue: new FormControl(undefined),
      parentName: new FormControl(undefined, Validators.required),
      childName: new FormControl(undefined, Validators.required),
      parentPhone : new FormControl(undefined, [Validators.required, regexPhoneValidator(RegexPhone.reg)]),
      paid : new FormControl(false, Validators.required),
      mail: new FormControl(undefined, [Validators.required, Validators.email]),
      age: new FormControl(undefined, [Validators.required, Validators.max(100)])
    });
  }

  ngOnInit() {
    this.subscriptions.push(this.service.getAll('internship')
      .subscribe((response : InternshipModel[]) => this.internships = response));
    if(this.registration) this.patchValue();

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  postRegistration(){
    this.loading = true;
    this.subscriptions.push(this.service.addRegistration(this.form.value).pipe(
      catchError(error => {
        console.log(error);
        this.postStatus.emit(false);
        this.postMessage.emit(error);
        this.loading = false;
        return error;
      })
    ).subscribe(response => {
      console.log(response)
      this.postStatus.emit(true);
      this.postMessage.emit(response.message);
      this.loading = false;
      this.close();
    }));
  }

  close(){
    this.closeCard.emit(false);
  }

  patchValue(){
    this.form.patchValue({
      ...this.registration
    });
  }
  update(){
    console.log(this.form.value);
    this.loading = true;
    const id = this.registration.id;
    this.subscriptions.push(this.service.patchRegistration(this.form.value, id).pipe(
      catchError(error => {
        console.log(error);
        this.postStatus.emit(false);
        this.postMessage.emit(error);
        this.loading = false;
        return error;
      })
    ).subscribe(response => {
      this.postMessage.emit(response.message);
      this.postStatus.emit(true);
      this.emitId.emit(id);
      this.loading = false;
      this.close();
    }));
  }

}
