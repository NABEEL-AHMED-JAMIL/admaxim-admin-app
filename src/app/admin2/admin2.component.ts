import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { matFormFieldAnimations } from '@angular/material';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit{
    // @ViewChild('nameRef') nameElementRef:ElementRef;
    
    // ngAfterViewInit(){

    //   this.nameElementRef.nativeElement.focus();
    //   // console.log(this.nameElementRef);
    // }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }



        hello="how u";
    mform = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email, 
      Validators.maxLength(64)])],

   });


   ShowEmail(){

        console.log(this.mform.value);

   }          


   mReset(){

    this.mform.reset();

}   

}
