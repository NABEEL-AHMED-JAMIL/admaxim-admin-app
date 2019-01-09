import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators, ValidationErrors } from '@angular/forms';

export interface ID {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drag-list',
  templateUrl: './drag-list.component.html',
  styleUrls: ['./drag-list.component.css']
})
export class DragListComponent implements OnInit {


  panelopenState: false;

  counter = 1;
  isCheck = true;
  first = [
    'Drag me',
    'Drag me 2',
    'Drag me 3',

  ];

  second = [
  ];

  // options for select id
  iDs: ID[] = [
    { value: 'Ad_Id', viewValue: 'Add_Id' },
    { value: 'Compain_Id', viewValue: 'Compain_Id' },
    { value: 'Flight_Id', viewValue: 'Flight_Id' }

  ];

  adminForm = this.formBuilder.group({
    sourceID: ['', Validators.compose([Validators.required])],
    selectID: ['', Validators.required],
    note: ['', Validators.required]
  });

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  delete(event) {

    console.log(event.target.value);
    let n = event.target.value;
    this.second.splice(n, 1);
    
  }

  addItem(){

    this.first.push("Drag me");
  }

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  }

}
