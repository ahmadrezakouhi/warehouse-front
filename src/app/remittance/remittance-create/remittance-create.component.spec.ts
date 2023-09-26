import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceCreateComponent } from './remittance-create.component';

describe('RemittanceCreateComponent', () => {
  let component: RemittanceCreateComponent;
  let fixture: ComponentFixture<RemittanceCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemittanceCreateComponent]
    });
    fixture = TestBed.createComponent(RemittanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
