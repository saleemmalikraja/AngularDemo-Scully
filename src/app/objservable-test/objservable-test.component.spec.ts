import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObjservableTestComponent } from './objservable-test.component';

describe('ObjservableTestComponent', () => {
  let component: ObjservableTestComponent;
  let fixture: ComponentFixture<ObjservableTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjservableTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjservableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
