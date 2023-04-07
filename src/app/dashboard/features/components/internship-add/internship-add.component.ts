import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {DateMinValidator} from "../../../../shared/Validators/DateMinValidator";
import {EndDateMinValidator} from "../../../../shared/Validators/EndDateMin";

@Component({
  selector: 'app-internship-add',
  templateUrl: './internship-add.component.html',
  styleUrls: ['./internship-add.component.css']
})
export class InternshipAddComponent implements OnInit {

  formGroup: FormGroup;
  todayDate : string;
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {

    this.todayDate = new Date().toLocaleDateString("fr-FR");

  console.log(this.todayDate)
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

  }
}
