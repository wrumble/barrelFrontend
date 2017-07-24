export class Answer {
    text: string;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.selected = false;
        this.text = data.text;
    }
}
