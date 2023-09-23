import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCreateComponent } from './goods-create.component';

describe('GoodsCreateComponent', () => {
  let component: GoodsCreateComponent;
  let fixture: ComponentFixture<GoodsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsCreateComponent]
    });
    fixture = TestBed.createComponent(GoodsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
