import { Component, OnInit, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-changedetection',
  templateUrl: './changedetection.component.html',
  styleUrls: ['./changedetection.component.css']
})
export class ChangedetectionComponent implements OnInit {

  objectOne: any = { 'key1': 'value1' };
  constructor(private appRef: ApplicationRef) { }

  ngOnInit() {
  }

  onClick() {
    console.log('trigered %conclick', 'color:orange');
     this.objectOne.key1 = 'valueONE';

   //  this.objectOne = { 'key2': 'value2' };
    // this.appRef.tick();
  }

}
