import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangedetectionComponent } from './changedetection.component';

describe('ChangedetectionComponent', () => {
  let component: ChangedetectionComponent;
  let fixture: ComponentFixture<ChangedetectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
