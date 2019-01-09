

import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionService } from '../dynamic-form/question-service';
import{QuestionBase} from '../dynamic-form/question-base';
import { QuestionControlService }    from '../dynamic-form/question-control-service';

@Component({
  
  selector: 'app-child-dynamic',
  templateUrl: './child-dynamic.component.html',
  styleUrls: ['./child-dynamic.component.css'],
  providers: [ QuestionControlService ]
})
export class  ChildDynamicComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
