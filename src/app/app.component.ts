import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit, CdkDragStart, CdkDrag, CdkDrop } from '@angular/cdk/drag-drop';

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

  dropped(event: CdkDragDrop<string[]>) {
    console.log('dropped');
  }

  entered(event: CdkDragEnter<string[]>) {
    console.log('entered');
  }

  exited(event: CdkDragExit<string[]>) {
    console.log('exited');
  }
}
