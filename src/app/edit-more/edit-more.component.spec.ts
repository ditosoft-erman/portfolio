import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoreComponent } from './edit-more.component';

describe('EditMoreComponent', () => {
  let component: EditMoreComponent;
  let fixture: ComponentFixture<EditMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
