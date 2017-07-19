import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {AuthService} from "../services/auth.service";
import { Http } from '@angular/http';
import { NgModule } from "@angular/core";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(
    public authSerivce:AuthService,
    private http:Http
  ) { }

  ngOnInit() {}
  onSignUpSubmit(){

    this.authSerivce.registerUser(this.signUpUser).subscribe(

        (res) => {

          if (res.status == 200){
            this.signUpMailerSubmit()
            this.onFormResult.emit({signedUp: true, res})
          }

        },

        (err) => {
          console.log(err.json())
          this.onFormResult.emit({signedUp: false, err})
        }
    )

  }

  signUpMailerSubmit() {
    var url = 'http://localhost:3000/subscribes';
    this.http.post(url, { email: this.signUpUser.email }).subscribe();
  }
}
