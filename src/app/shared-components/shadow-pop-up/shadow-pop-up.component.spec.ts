import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowPopUpComponent } from './shadow-pop-up.component';

describe('ShadowPopUpComponent', () => {
  let component: ShadowPopUpComponent;
  let fixture: ComponentFixture<ShadowPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
