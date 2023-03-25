import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {

  routeParam: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.routeParam = this.route.routeConfig.path;

  }


}
