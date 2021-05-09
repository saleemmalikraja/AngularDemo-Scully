import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomCompComponent } from './custom-comp.component';

describe('CustomCompComponent', () => {
  let component: CustomCompComponent;
  let fixture: ComponentFixture<CustomCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
