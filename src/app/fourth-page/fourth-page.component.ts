import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../third-page/employee.model';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {

  @Input() allEmployee: Employee[]; // child component of third-page-component - will be used for parent to child
  constructor() {
    console.log('Employee in cons ' );
   }

  ngOnInit() {
    console.log('Employee in ngOnInit ');
  }

}
