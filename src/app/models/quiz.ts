import { Question } from './question';

export class Quiz {
    questions: Question[];

    constructor(data: any) {
        if (data) {
            this.questions = [];
            data.questions.forEach(question => {
                this.questions.push(new Question(question));
            });
        }
    }
}
