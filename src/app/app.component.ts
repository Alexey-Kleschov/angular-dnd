import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit, CdkDragStart, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
eventBadge: any;

  ngOnInit() {
    setTimeout( () => {
      this.isShowSec = true; 
    }, 5000);
  }

  public todo = [
  { title: 'Get to work', dateAdded: new Date().toString() },
  { title: 'Pick up groceries', dateAdded: new Date().toString() },
  ];

  public done = [
  { title: 'Get up', dateAdded: new Date().toString() },
  { title: 'Brush teeth', dateAdded: new Date().toString() },
];

isShowSec = false;


  drop(event:any) {
    console.log(event);
    console.log('dropped');
  }

  entered(event:any) {
    console.log('entered');
  }

  exited(event:any) {
    console.log('exited');
  }

  badgeDrop(event:any) {
    console.log('badgeDrop');
    console.log(event);
  }
  getDrop(event:any){
    console.log('GET DROPPPPP');
    this.eventBadge = event;
    console.log(this.eventBadge);
  }
  getData(event:any) {
    console.log(event)
  }
  fuck() {
    console.log('fuck');
  }
  dragEnter2(){
    console.log('drag in sec block');
  }
}
