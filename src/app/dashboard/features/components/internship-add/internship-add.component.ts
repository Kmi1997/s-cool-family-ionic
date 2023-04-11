import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {DateMinValidator} from "../../../../shared/Validators/DateMinValidator";
import {EndDateMinValidator} from "../../../../shared/Validators/EndDateMin";
import {CallAPIService} from "../../../../shared/services/calls-api.service";
import {InternshipPayload} from "../../../models/internship.payload";
import {catchError, Subscription} from "rxjs";
import {InternshipModel} from "../../../models/internship.model";

@Component({
  selector: 'app-internship-add',
  templateUrl: './internship-add.component.html',
  styleUrls: ['./internship-add.component.css']
})
export class InternshipAddComponent implements OnInit, OnDestroy{

  formGroup: FormGroup;
  todayDate : string;
  @Output() closeCard : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() postStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() postMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() title = 'card';
  @Input() internship : InternshipModel;
  subscriptions : Subscription[] = [];
  loading = false;
  @Input() addOrPatch = 'add';
  constructor(private builder: FormBuilder, private service: CallAPIService) { }

  ngOnInit(): void {

    this.todayDate = new Date().toLocaleDateString("fr-FR");

    this.formGroup = this.builder.group({
      name: new FormControl(undefined, Validators.required),
      place: new FormControl(undefined, Validators.required),
      numberAvailable: new FormControl(undefined, [Validators.required, Validators.min(1)]),
      startDate: new FormControl(undefined, [Validators.required, DateMinValidator.dateMinimum(), Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      endDate: new FormControl(undefined, [Validators.required, EndDateMinValidator.endDateMinimum('startDate'), Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      endHour: new FormControl(undefined, [Validators.required, Validators.pattern(/^([0-1][0-9]|2[0-4]):[0-5][0-9]$/)]),
      startHour: new FormControl(undefined, [Validators.required, Validators.pattern(/^([0-1][0-9]|2[0-4]):[0-5][0-9]$/)]),
      price: new FormControl(undefined, [Validators.required, Validators.min(1)]),
      fromAge: new FormControl(undefined, [Validators.required, Validators.min(1)])
    });

    if(this.internship) this.patchValue();
  }

  postInternship(){
    this.loading = true;
    const payload : InternshipPayload = this.formGroup.value;
    this.subscriptions.push(this.service.addInternship(payload).pipe(
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
      this.loading = false;
      this.postMessage.emit(response.message);
      this.close();
    }));
  }
  close(){
    this.closeCard.emit(false);
  }

  patchValue(){
    this.formGroup.patchValue({
      ...this.internship
    });
  }
  update(){
    this.loading = true;
    const id = this.internship.id;
    this.subscriptions.push(this.service.patchInternship(this.formGroup.value, id).pipe(
      catchError(error => {
        console.log(error);
        this.postStatus.emit(false);
        this.postMessage.emit(error);
        this.loading = false;
        return error;
      })
    ).subscribe(response => {
      this.loading = false;
      this.postMessage.emit(response.message);
      this.postStatus.emit(true);
      console.log(response);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
