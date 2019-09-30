import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
@Input() eventBadge;
@Output() badge = new EventEmitter();
@Output() newItemsData = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("badge init");
  }

  ngOnChanges() {
    console.log("i change");
    this.badgeDrop();
  }

newItems = [
    'Item 0',
    'Item 1'  
  ]

  public badgeDrop() {
    console.log("badgeDrop inside");
    this.newItemsData.emit(this.newItems);
  }

}