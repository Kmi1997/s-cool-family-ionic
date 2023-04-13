import {Component, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {

  @Output() emitToPrintButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  printButton(){
    this.emitToPrintButton.emit(true)
  }

}
