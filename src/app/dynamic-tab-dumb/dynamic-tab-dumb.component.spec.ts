import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicTabDumbComponent } from './dynamic-tab-dumb.component';

describe('DynamicTabDumbComponent', () => {
  let component: DynamicTabDumbComponent;
  let fixture: ComponentFixture<DynamicTabDumbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
