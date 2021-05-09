import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangedetectionComponent } from './changedetection.component';
import { RouterModule } from '@angular/router';
import { ChangeDetChildComponent } from './change-det-child/change-det-child/change-det-child.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChangedetectionComponent
      }
    ]),
  ],
  declarations: [ChangedetectionComponent, ChangeDetChildComponent]
})
export class ChangedetectionModule { }
