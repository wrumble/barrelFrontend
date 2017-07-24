import { Answer } from './answer';

export class Question {
    text: string;
    answers: Answer[];

    constructor(data: any) {
        data = data || {};
        this.text = data.text;
        this.answers = [];
        data.answers.forEach(answer => {
            this.answers.push(new Answer(answer));
        });
    }
}
