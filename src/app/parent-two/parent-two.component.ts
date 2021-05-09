import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements  AfterViewInit  {

  messageTwo: string;
  @ViewChild(ChildTwoComponent) childTwo;
  constructor() { }

  ngAfterViewInit(): void { // child to parent implements AfterViewInit
    this.messageTwo = !!this.childTwo ? this.childTwo.messageTwo : '';
  }
}
