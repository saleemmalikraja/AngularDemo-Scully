import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrls: ['./subject-test.component.css']
})
export class SubjectTestComponent {

  subject = new Rx.Subject();

  constructor() {
    this.subject.subscribe({
      next: (v) => console.log(`Observer A: Value = ${v}`)
    });


    this.subject.subscribe({
      next: (v) => console.log(`Observer B: Value = ${v}`)
    });
    const observable = from([1, 2, 3, 4]);
    observable.subscribe(this.subject);
  }

}
