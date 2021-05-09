import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicTabResultComponent } from './dynamic-tab-result.component';

describe('DynamicTabResultComponent', () => {
  let component: DynamicTabResultComponent;
  let fixture: ComponentFixture<DynamicTabResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
