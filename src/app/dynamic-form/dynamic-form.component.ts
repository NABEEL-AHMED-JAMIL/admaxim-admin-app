import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../dynamic-form/question-service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers:  [QuestionService]
})
export class DynamicFormComponent {
  questions: any[];

  constructor(service: QuestionService) { 
  this.questions = service.getQuestions();
  }

 

}
