import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Answer, Question, Quiz } from '../models/index';
import {MaterializeAction} from "angular2-materialize";
import { HomeComponent } from '../home/home.component';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { Http } from '@angular/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {

  @ViewChild('homeScreen') homeScreen: HomeComponent;
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  quiz: Quiz;
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  selections: string[] = Array();

  constructor(private quizService: QuizService,
     public authService:AuthService,
     private router:Router,
     private http:Http
   ) { }

  ngOnInit() {
    this.loadQuiz()
  }

  loadQuiz() {
    this.quizService.get().subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
  }

  goTo(index: number) {
   if (index >= 0 ) {
     this.pager.index = index;
   }
 }

 onSelect(answer: Answer) {
   var selectionText = `${this.pager.index +1}. ${answer.text}`;
   if (answer.selected == false && this.selections.length > 0) {
     this.selections.splice(this.selections.indexOf(selectionText), 1);
   } else {
     this.selections.push(selectionText);
   }
 }

 openMailingListModal() {
   this.homeScreen.openMailingListModal();
 }

 presentAuthDialog(){
   this.authDialog.openDialog('register');
 }
}
