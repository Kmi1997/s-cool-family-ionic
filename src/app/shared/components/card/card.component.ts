import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title = "Card";
  @Input() closeButton = false;
  @Input() size: string;
  @Input() center = false;
}
