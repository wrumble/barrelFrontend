import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  get() {
    return this.http.get("../../assets/quiz.json").map(res => res.text().length > 0 ? res.json() : null);
  }
}
