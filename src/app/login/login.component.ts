import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    constructor( private formBuilder: FormBuilder) {

    
    }
    Form: FormGroup;
    submitted = false;
    
  

  ngOnInit() {
  }


    form = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.email, 
    Validators.maxLength(64)])],

    password: ['', Validators.compose([Validators.required, Validators.minLength(5)
      ,Validators.maxLength(32)])]
      
    // username:[''],
    // password:['']
  });


  


  onSubmit() {
   
    console.warn(this.form.value);
  }
  


}
