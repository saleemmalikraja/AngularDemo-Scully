import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

@Component({
  selector: 'app-objservable-test',
  templateUrl: './objservable-test.component.html',
  styleUrls: ['./objservable-test.component.css']
})
export class ObjservableTestComponent {

  counts = from([1, 2, 3, 4]);
  constructor() {
    this.counts.subscribe(x => {
      console.log(`Observer A: Value = ${x}`);
    });


    this.counts.subscribe(x => {
      console.log(`Observer B: Value = ${x}`);
    });
  }

}

