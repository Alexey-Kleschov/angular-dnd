import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

newItems = [
    'Item 0',
    'Item 1'  
  ]

  public badgeDrop(e:any) {
    console.log("badgeDrop inside");
    console.log(e);
  }

}