import {Component, Input, OnInit} from '@angular/core';
import {CallAPIService} from "../../../../shared/services/calls-api.service";
import {AdminModel} from "../../../models/admin.model";

@Component({
  selector: 'app-admin-listing',
  templateUrl: './admin-listing.component.html',
  styleUrls: ['./admin-listing.component.scss'],
})
export class AdminListingComponent  implements OnInit {

  @Input() admin : AdminModel;
  constructor(private service: CallAPIService) { }

  ngOnInit() {
  }

}
