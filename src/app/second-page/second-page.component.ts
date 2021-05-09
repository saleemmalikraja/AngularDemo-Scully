import { Component, OnInit } from '@angular/core';
import { SecondPageService } from './second-page.service';

export interface TaskEdit {
  id: number;
  description: string;
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})


export class SecondPageComponent implements OnInit {

  tasks: any[] = [];
  myTask: string;
  taskEdit: TaskEdit;
  editMode = false;
  loading = false;
  constructor(private appservice: SecondPageService) {}

  ngOnInit() {
    this.getAllTasks();
  } // ngOnInit
  getAllTasks() {
    this.appservice.getTasks().subscribe((data: any) => {
      this.tasks = data._body || data || [];
    });
  } // getAllTasks
  create() {
    this.loading = true;
    const postData = {
      description: this.myTask
    };

    this.appservice.createTask(postData).subscribe(data => {
      this.loading = false;
      this.getAllTasks();
      this.myTask = '';
    });
  } // create
  edit(task) {
    this.taskEdit = Object.assign({}, task);
    task.editing = true;
    this.editMode = true;
  } // edit
  saveEdit(task) {
    this.appservice.updateTask(this.taskEdit).subscribe(data => {
      // task = data;
      this.getAllTasks();
      task.editing = false;
      this.editMode = false;
    });
  } // saveEdit
  delete(task) {
    console.log('Delete');
    this.appservice.deleteTask(task.id).subscribe(data => {
      this.getAllTasks();
    });
  } // delete
}
