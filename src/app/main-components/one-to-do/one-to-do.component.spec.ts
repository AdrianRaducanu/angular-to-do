import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToDoComponent } from './one-to-do.component';

describe('OneToDoComponent', () => {
  let component: OneToDoComponent;
  let fixture: ComponentFixture<OneToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
