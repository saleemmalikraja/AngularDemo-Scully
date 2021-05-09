import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  message = 'Hello Techiesss!';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  ngOnInit() {}
}
