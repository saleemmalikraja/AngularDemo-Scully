import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {


  message: string;

  constructor() { }

  receiveMessage($event) {
    this.message = $event;
  }

}
