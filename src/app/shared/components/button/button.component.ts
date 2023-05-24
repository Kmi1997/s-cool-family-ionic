import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() iconName: string;
  @Input() size = "default";
  @Input() disabled = false;
  @Input() text: string;

  constructor() {
  }

}
