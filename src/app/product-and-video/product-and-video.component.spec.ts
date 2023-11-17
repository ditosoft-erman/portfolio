import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAndVideoComponent } from './product-and-video.component';

describe('ProductAndVideoComponent', () => {
  let component: ProductAndVideoComponent;
  let fixture: ComponentFixture<ProductAndVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAndVideoComponent]
    });
    fixture = TestBed.createComponent(ProductAndVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
