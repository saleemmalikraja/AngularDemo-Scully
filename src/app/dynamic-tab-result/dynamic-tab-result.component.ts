import { Component, OnInit } from '@angular/core';
import { Tab } from './dynamic-tab.model';
import { ParentComponent } from '../parent/parent.component';
import { ParentTwoComponent } from '../parent-two/parent-two.component';


@Component({
  selector: 'app-dynamic-tab-result',
  templateUrl: './dynamic-tab-result.component.html',
  styleUrls: ['./dynamic-tab-result.component.css']
})
export class DynamicTabResultComponent implements OnInit {
  configurationToTab: Tab.TabConfig[] = [];
  constructor() { }

  ngOnInit() {
    this.configurationToTab = [
      {label: 'Tab 1' , content : 'Content 1' , componentName: ParentComponent},
      {label: 'Tab 2',  content : 'Content 2' , componentName: ParentTwoComponent},
    ];
  }
}
