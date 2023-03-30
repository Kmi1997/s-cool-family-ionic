import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { Model } from 'src/app/dashboard/models/Model.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title = "Card";

}
