import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-internship-add',
  templateUrl: './internship-add.component.html',
  styleUrls: ['./internship-add.component.css']
})
export class InternshipAddComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {

    this.formGroup = this.builder.group({
      name: new FormControl(undefined, Validators.required),
      place: new FormControl(undefined, Validators.required),
      numberAvailable: new FormControl(undefined, Validators.required),
      startDate: new FormControl(undefined, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)),
      endDate: new FormControl(undefined, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)),
      endHour: new FormControl(undefined, Validators.pattern(/^([0-1][0-9]|2[0-4]):[0-5][0-9]$/)),
      startHour: new FormControl(undefined, Validators.pattern(/^([0-1][0-9]|2[0-4]):[0-5][0-9]$/)),
      price: new FormControl(0, Validators.min(0)),
      fromAge: new FormControl(1, Validators.min(1))
    });

  }
}
