import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent  implements OnInit{

  @Input() msg : string;
  @Input() color : string;

  constructor() { }

  ngOnInit() {}

}
