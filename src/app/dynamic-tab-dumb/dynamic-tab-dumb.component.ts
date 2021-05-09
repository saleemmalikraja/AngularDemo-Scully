import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab-dumb',
  templateUrl: './dynamic-tab-dumb.component.html',
  styleUrls: ['./dynamic-tab-dumb.component.css']
})
export class DynamicTabDumbComponent implements OnInit {

  @Input() configuration: any;
  constructor() { }

  ngOnInit() {
    console.log(this.configuration);
  }

}
