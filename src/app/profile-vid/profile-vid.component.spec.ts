import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVidComponent } from './profile-vid.component';

describe('ProfileVidComponent', () => {
  let component: ProfileVidComponent;
  let fixture: ComponentFixture<ProfileVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileVidComponent]
    });
    fixture = TestBed.createComponent(ProfileVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
