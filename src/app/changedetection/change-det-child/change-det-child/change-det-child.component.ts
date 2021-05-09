import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-det-child',
  templateUrl: './change-det-child.component.html',
  styleUrls: ['./change-det-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetChildComponent implements OnInit {

  // @Input() primitive: string;
  @Input() nonPrimitive: any;
  constructor(private cdr: ChangeDetectorRef) {
  }

  get runChangeDetection() {
    console.log('%cChecking the view', 'color:green');
    return true;
  }
  ngOnInit() {
  }

}
