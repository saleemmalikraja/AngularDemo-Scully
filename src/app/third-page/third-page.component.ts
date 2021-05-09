import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from './employee-profile.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  employee: any;
  _allEmployee: Employee[];
  displayedColumns: string[] = ['empId', 'empName'];

  constructor(private employeeProfileService: EmployeeProfileService) {
  }

  ngOnInit() {
    this.getEmployeeProfileDetails();
  } // ngOnInit
  getEmployeeProfileDetails() {
    this.employeeProfileService.getEmployeeProfileDetails().subscribe((data: any) => {
      this._allEmployee = data._body || data || [];
    });
  }
}
