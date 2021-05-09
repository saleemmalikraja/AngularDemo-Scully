import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FourthPageComponent } from './fourth-page.component';

describe('FourthPageComponent', () => {
  let component: FourthPageComponent;
  let fixture: ComponentFixture<FourthPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
