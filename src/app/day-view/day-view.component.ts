import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit, CdkDragStart, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventBadge: any;

isShowSec = false;


  drop(event:any) {
    
    console.log('main dropped');
    this.eventBadge = event.item.data;
    console.log(this.eventBadge);
  }

  entered(event:any) {
    console.log('entered');
  }

  exited(event:any) {
    // console.log('exited');
  }

  badgeDrop(event:any) {
    console.log('badgeDrop');
    // console.log(event);
  }
  getDrop(event:any){
    console.log('GET DROPPPPP');
    this.eventBadge = event;
    console.log(this.eventBadge);
  }
  getData(event:any) {
    // console.log(event)
    this.eventBadge = event;
  }
  fuck() {
    console.log('YEEEEEEAAAAAAAAHHHHHHHHHHHHH!!!!');
  }
  dragEnter2(){
    console.log('drag in sec block');
  }
  enteredInside() {
    console.log('enter inside');
  }

  predicate() {
    return true;
  }

}