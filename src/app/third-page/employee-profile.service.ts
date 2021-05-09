import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeProfileService {
  base_url = 'http://mybackend.com/api/';
  empProfile_endpoint = 'empDetail';
  constructor(private http: HttpClient) {}

  // Gets all tasks
  getEmployeeProfileDetails() {
    return this.http
      .get(this.base_url + this.empProfile_endpoint);
  } // getTasks

}
