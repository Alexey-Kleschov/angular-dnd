import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BadgeComponent } from './badge/badge.component';
import { DayViewComponent } from './day-view/day-view.component';

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule, CommonModule],
  declarations: [AppComponent, HelloComponent, BadgeComponent, DayViewComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
