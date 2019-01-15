import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { ITEMS } from '../mock-items';
import { FormBuilder, Validators } from '@angular/forms';
import { item } from '../item';
import { UserService } from '../admin/user-service';
import { first } from 'rxjs/operators';
export interface Role {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  // options for select roles
  roles: Role[] = [
    { value: 'Super Admin', viewValue: 'Super Admin' },
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Client', viewValue: 'Client' },
    { value: 'User', viewValue: 'User' }
  ];

  items = ITEMS;
  selectedRole: string;
  searchTerm: string;
  edate: Date;
  sdate: Date;
  fsdate: string;
  fdate: string;
  smail: string;
  note: string;
  mflag: boolean;
  error: string;
  Loadusers: item[] = [];
  // form Validators 
  mform = this.formBuilder.group({
    SelectRole: ['', Validators.required],
    Startdate: [Date, Validators.required],
    mdate: [Date, Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email,
    Validators.maxLength(64)])],
    Note: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
    private muserservice: UserService) {

    console.log("constructor running");
  }

  ngOnInit() {
    this.loadAllUsers();

  }

  onSubmit() {
    console.log(this.mform.value);
    this.selectedRole = this.mform.controls['SelectRole'].value;
    console.log(this.selectedRole);
    this.smail = this.mform.controls['email'].value;
    this.edate = this.mform.controls['mdate'].value;
    this.sdate = this.mform.controls['Startdate'].value;
    this.note = this.mform.controls['Note'].value;
    this.fsdate = this.sdate.toDateString();
    this.fdate = this.edate.toDateString();

    let newItem: item = new item(this.fdate, this.smail, this.fsdate, this.selectedRole, this.note);


    // if (this.sdate <= this.edate) {

    //   this.items.push(newItem);
    //   this.mform.reset();
    // }
    // else {
    //   this.mform = this.formBuilder.group({
    //     Startdate: [Date, Validators.required],
    //     mdate: [Date, Validators.required]
    //   });

    //   this.mflag = true;
    //   this.error = "Start Date must be less then End Date";
    // }

    console.log(newItem);
    this.muserservice.register(newItem)
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {

        });
        this.mform.reset();

  }


  //this methodis to load data from local Stoarage
  private loadAllUsers() {
    this.muserservice.getAll().pipe(first()).subscribe(users => {
      this.Loadusers = users;
      console.log(this.Loadusers + "Return Data");
    });

  }


  //this method is for to delete item from loacal stoarage
  deleteUser(id: number) {
    console.log("del btn working");
    this.muserservice.delete(id).pipe(first()).subscribe(() => {
        this.loadAllUsers()
    });
}

  // delete(event) {

  //   console.log(event.target.value);
  //   let n = event.target.value;
  //   this.items.splice(n, 1);
  // }

  onReset() {
    this.mform.reset();
  }


}
