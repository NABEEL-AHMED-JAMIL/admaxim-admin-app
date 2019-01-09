import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

   tiles=[
    '1','2','3','4','5','6'
   ];

  
   drop(event: CdkDragDrop<string[]>) {
    if(event.previousIndex==0){
      console.log("yes done");
    
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);}


    
    
  }
    



  constructor() { }

  ngOnInit() {
  }

}
