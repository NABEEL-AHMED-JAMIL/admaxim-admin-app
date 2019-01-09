import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../dynamic-form/question-base';

@Component({
  selector: 'app-question-dynamic',
  templateUrl: './question-dynamic.component.html',
 
})
export class QuestionDynamicComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
