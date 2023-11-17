import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineWorksComponent } from './fine-works.component';

describe('FineWorksComponent', () => {
  let component: FineWorksComponent;
  let fixture: ComponentFixture<FineWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FineWorksComponent]
    });
    fixture = TestBed.createComponent(FineWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
