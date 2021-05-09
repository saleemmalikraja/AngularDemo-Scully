import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectTestComponent } from './subject-test.component';

describe('SubjectTestComponent', () => {
  let component: SubjectTestComponent;
  let fixture: ComponentFixture<SubjectTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
