import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mailing-list-form',
  templateUrl: './mailing-list-form.component.html',
  styleUrls: ['./mailing-list-form.component.sass']
})
export class MailingListFormComponent implements OnInit {

  signUpUser = {
    email: ''
  };

  constructor(private http:Http) { }

  ngOnInit() {}

  signUpMailerSubmit() {
    var url = 'http://localhost:3000/subscribes';
    this.http.post(url, { email: this.signUpUser.email }).subscribe();
  }

}
