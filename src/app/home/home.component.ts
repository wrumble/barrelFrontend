import {Component, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  email: '';

  modalActions = new EventEmitter<string|MaterializeAction>();
  mailingListModalAction = new EventEmitter<string|MaterializeAction>();

  constructor(private http:Http) { }

  openQuizModal() {
    this.modalActions.emit({action:"modal", params:['open']});
  }

  openMailingListModal() {
    this.mailingListModalAction.emit({action:"mailingListModal", params:['open']});
  }

  signUpMailerSubmit() {
    var url = 'http://localhost:3000/subscribes';
    this.http.post(url, { email: this.email }).subscribe();
  }
}
