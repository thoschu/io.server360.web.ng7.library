import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsImageDisclaimerNg7LibComponent } from './ps-image-disclaimer-ng7-lib.component';

describe('PsImageDisclaimerNg7LibComponent', () => {
  let component: PsImageDisclaimerNg7LibComponent;
  let fixture: ComponentFixture<PsImageDisclaimerNg7LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsImageDisclaimerNg7LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsImageDisclaimerNg7LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
