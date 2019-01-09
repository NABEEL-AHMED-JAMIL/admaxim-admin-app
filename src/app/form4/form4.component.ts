import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder,Validators,ValidationErrors } from '@angular/forms';
export interface ID {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})


export class Form4Component implements OnInit {

          
  @Input() errors: ValidationErrors;
          sourceID:number;
          selectID:string;
          note:string;
          mtry:string;
          setError=false;
              // options for select id
             iDs: ID[] = [
                {value: 'Ad_Id',     viewValue: 'Add_Id'},
                {value: 'Compain_Id',      viewValue: 'Compain_Id'},
                {value: 'Flight_Id',  viewValue: 'Flight_Id'}
                
           ];



                    adminForm = this.formBuilder.group({
                          sourceID:['', Validators.compose([Validators.required])],
                          selectID:['',Validators.required],
                          note:['',Validators.required]
                    });


                constructor(private formBuilder:FormBuilder) { }

                ngOnInit() {}

                        onSubmit(){

                            this.sourceID= this.adminForm.controls['sourceID'].value;
                            this.selectID= this.adminForm.controls['selectID'].value;
                            this.note=this.adminForm.controls['note'].value;

                            console.log(this.sourceID,this.selectID,this.note);
                      
                      }

                    

                        onReset(){
                          this.adminForm.reset();
                          
                        }

  }
