import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit, CdkDragStart, CdkDrag } from '@angular/cdk/drag-drop';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
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
