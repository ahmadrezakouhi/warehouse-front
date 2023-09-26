import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceListComponent } from './remittance-list.component';

describe('RemittanceListComponent', () => {
  let component: RemittanceListComponent;
  let fixture: ComponentFixture<RemittanceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemittanceListComponent]
    });
    fixture = TestBed.createComponent(RemittanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
