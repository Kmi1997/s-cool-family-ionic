import { Component, Input } from '@angular/core';
import { InternshipModel } from 'src/app/dashboard/models/internship.model';

@Component({
  selector: 'app-internship-listing',
  templateUrl: './internship-listing.component.html'
})


export class InternshipListingComponent {

  @Input() intern: InternshipModel;

  constructor() { }
}
