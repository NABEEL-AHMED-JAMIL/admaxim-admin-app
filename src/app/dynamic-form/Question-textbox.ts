import {QuestionBase} from '../dynamic-form/question-base';


export class TextboxQuestion extends QuestionBase<string>{
controlType='textbox';
type:string;

constructor(options:{}={}){
super(options);
this.type=options['type'] || '';

}

}