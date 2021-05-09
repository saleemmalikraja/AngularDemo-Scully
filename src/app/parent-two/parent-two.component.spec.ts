import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentTwoComponent } from './parent-two.component';

describe('ParentTwoComponent', () => {
  let component: ParentTwoComponent;
  let fixture: ComponentFixture<ParentTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
