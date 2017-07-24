import {Component, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  openQuizModal() {
    this.modalActions.emit({action:"modal", params:['open']});
  }
}
