import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatSleepEditRepeatSectionComponent } from './eat-sleep-edit-repeat-section.component';

describe('EatSleepEditRepeatSectionComponent', () => {
  let component: EatSleepEditRepeatSectionComponent;
  let fixture: ComponentFixture<EatSleepEditRepeatSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EatSleepEditRepeatSectionComponent]
    });
    fixture = TestBed.createComponent(EatSleepEditRepeatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
