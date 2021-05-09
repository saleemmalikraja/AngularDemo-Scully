import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListSmartComponent } from './list-smart.component';

describe('ListSmartComponent', () => {
  let component: ListSmartComponent;
  let fixture: ComponentFixture<ListSmartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
