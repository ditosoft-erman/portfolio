import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionComponent } from './first-section.component';

describe('IntroComponent', () => {
  let component: FirstSectionComponent;
  let fixture: ComponentFixture<FirstSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstSectionComponent],
    });
    fixture = TestBed.createComponent(FirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
