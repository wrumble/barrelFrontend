import { Component, OnInit, EventEmitter } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Answer, Question, Quiz } from '../models/index';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {

  quiz: Quiz;
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  selections: [string]

  constructor(private quizService: QuizService) { }

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
   if (answer.selected = true) {
     this.selections.splice(this.selections.indexOf(answer.text), 1);
   } else {
     this.selections.push(answer.text);
   }
 }
}
