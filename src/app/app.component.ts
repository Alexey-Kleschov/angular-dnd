import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit, CdkDragStart, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{

newItems = [
    'Item 0',
    'Item 1'  
  ]

  public todo = [
  { title: 'Get to work', dateAdded: new Date().toString() },
  { title: 'Pick up groceries', dateAdded: new Date().toString() },
  ];

  public done = [
  { title: 'Get up', dateAdded: new Date().toString() },
  { title: 'Brush teeth', dateAdded: new Date().toString() },
];

  drop(event:any) {
    console.log('dropped');
  }

  entered(event:any) {
    console.log('entered');
  }

  exited(event:any) {
    console.log('exited');
  }
}
